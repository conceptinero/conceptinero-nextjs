import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (value) => !value || isValidPhoneNumber(value),
      "Please enter a valid phone number"
    ),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  captchaToken: z.string().min(1, "Captcha is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
