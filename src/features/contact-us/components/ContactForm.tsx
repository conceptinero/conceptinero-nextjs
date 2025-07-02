"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactFormJSON } from "@/features/contact-us/actions";

const formSchema = z.object({
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
});

type FormValues = z.infer<typeof formSchema>;

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: undefined,
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);

    try {
      const result = await submitContactFormJSON(data);

      if (result.success) {
        toast.success(result.message);
        // Custom reset to preserve country code
        form.reset({
          name: "",
          email: "",
          phone: undefined, // This will preserve the CA country code
          company: "",
          message: "",
        });
      } else {
        toast.error(result.message);

        // Handle field-specific errors
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, messages]) => {
            if (field in form.getValues()) {
              form.setError(field as keyof FormValues, {
                type: "server",
                message: messages[0],
              });
            }
          });
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Send Us a Message
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input placeholder="john@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="phone-input-wrapper">
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={field.value}
                        onChange={field.onChange}
                        defaultCountry="CA"
                        className="phone-input"
                      />
                      <style jsx>{`
                        .phone-input-wrapper :global(.PhoneInput) {
                          display: flex;
                          align-items: center;
                          height: 2.5rem;
                          width: 100%;
                          border-radius: 0.375rem;
                          border: 1px solid hsl(var(--border));
                          background-color: hsl(var(--background));
                          padding: 0.5rem 0.75rem;
                          font-size: 0.875rem;
                          transition: all 0.2s;
                        }
                        .phone-input-wrapper :global(.PhoneInput:focus-within) {
                          outline: 2px solid transparent;
                          outline-offset: 2px;
                          box-shadow: 0 0 0 2px hsl(var(--ring));
                        }
                        .phone-input-wrapper :global(.PhoneInputCountrySelect) {
                          background: transparent;
                          border: none;
                          margin-right: 0.5rem;
                          font-size: 0.875rem;
                        }
                        .phone-input-wrapper :global(.PhoneInputInput) {
                          background: transparent;
                          border: none;
                          outline: none;
                          flex: 1;
                          font-size: 0.875rem;
                          color: hsl(var(--foreground));
                        }
                        .phone-input-wrapper
                          :global(.PhoneInputInput::placeholder) {
                          color: hsl(var(--muted-foreground));
                        }
                        .phone-input-wrapper
                          :global(.PhoneInputCountrySelectArrow) {
                          color: hsl(var(--muted-foreground));
                        }
                      `}</style>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Inc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How can we help you with SR&ED tax credits?"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
