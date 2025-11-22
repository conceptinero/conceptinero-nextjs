"use server";

import { z } from "zod";
import { sendUserConfirmationEmail } from "@/features/contact-us/lib/emailService";
import { AppError } from "@/lib/AppError";
import { CheckRequestLimit } from "../lib/rateLimit";
// import { verifyCaptcha } from "../lib/captcha";
import { ContactFormData } from "../schema";
import { verifyCaptcha } from "../lib/captcha";

export type ContactFormResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function sendToGoogleSheets(data: ContactFormData) {
  const response = await fetch(process.env.GS_WEBHOOK_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      apiKey: process.env.GS_API_KEY,
    }),
  });

  if (!response.ok || (await response.json()).success === false) {
    throw new Error("Failed to send data to Google Sheets");
  }
}

export async function submitContactFormJSON(
  data: ContactFormData
): Promise<ContactFormResult> {
  try {
    await verifyCaptcha(data.captchaToken);
    await CheckRequestLimit();

    await Promise.all([
      sendUserConfirmationEmail(data),
      sendToGoogleSheets(data),
    ]);

    return {
      success: true,
      message:
        "Thank you for your inquiry! We have received your message and will get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);

    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.errors.forEach((err) => {
        if (err.path.length > 0) {
          const field = err.path[0] as string;
          if (!errors[field]) {
            errors[field] = [];
          }
          errors[field].push(err.message);
        }
      });

      return {
        success: false,
        message: "Please fix the errors below and try again.",
        errors,
      };
    }

    if (error instanceof AppError) {
      return {
        success: false,
        message: error.message,
      };
    } else
      return {
        success: false,
        message:
          "An unexpected error occurred while submitting the form. Please try again later.",
      };
  }
}
