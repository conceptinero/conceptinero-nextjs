# Contact Form Email Service

This module provides server actions and email functionality for handling contact form submissions.

## Environment Variables Required

Add these to your `.env.local` file:

```env
SMTP_USER=abdullahahmed2004@gmail.com
SMTP_PASS=xhdq eemx rrzd kpuk
```

## Server Actions

### `submitContactForm(prevState, formData)`

- For use with native HTML forms and `useFormState`
- Accepts FormData from form submission
- Returns validation errors and success messages

### `submitContactFormJSON(data)`

- For use with react-hook-form or direct JSON data
- Accepts ContactFormData object
- Returns validation errors and success messages

## Email Templates

The service sends two emails:

1. **Confirmation email** to the user who submitted the form
2. **Notification email** to `abdullahahmed2004@gmail.com` with form details

## Usage Examples

### With react-hook-form (Current Implementation)

```tsx
import { submitContactFormJSON } from "@/features/contact-us/actions";

const result = await submitContactFormJSON(formData);
if (result.success) {
  // Handle success
} else {
  // Handle errors
}
```

### With useFormState

```tsx
import { useFormState } from "react-dom";
import { submitContactForm } from "@/features/contact-us/actions";

const [state, formAction] = useFormState(submitContactForm, null);

return <form action={formAction}>{/* form fields */}</form>;
```

## Email Service Functions

### Low-level functions (for custom implementations):

- `sendUserConfirmationEmail(email, name)`
- `sendAdminNotificationEmail(data)`
- `sendContactFormEmails(data)` - Sends both emails

## Form Validation

The server actions use Zod schema validation with the following fields:

- `name` (required, min 2 characters)
- `email` (required, valid email)
- `phone` (optional)
- `company` (required, min 2 characters)
- `industry` (required)
- `message` (required, min 10 characters)
