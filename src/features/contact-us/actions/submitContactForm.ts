"use server";

import { z } from "zod";
import { sendContactFormEmails } from "@/features/contact-us/lib/emailService";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFormResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  prevState: ContactFormResult | null,
  formData: FormData
): Promise<ContactFormResult> {
  try {
    // Extract form data
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    // Validate the form data
    const validatedData = contactFormSchema.parse(rawData);

    // Send emails
    await sendContactFormEmails(validatedData);

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

    return {
      success: false,
      message:
        "Something went wrong. Please try again later or contact us directly.",
    };
  }
}

// Alternative server action that accepts JSON data (for use with react-hook-form)
export async function submitContactFormJSON(
  data: ContactFormData
): Promise<ContactFormResult> {
  try {
    // Validate the form data
    const validatedData = contactFormSchema.parse(data);

    // Send emails
    await sendContactFormEmails(validatedData);

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

    return {
      success: false,
      message:
        "Something went wrong. Please try again later or contact us directly.",
    };
  }
}
