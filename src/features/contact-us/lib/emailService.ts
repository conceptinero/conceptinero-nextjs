import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  message: string;
}

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email template for user confirmation
const getUserConfirmationEmailHtml = (data: ContactFormData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #f9fafb; }
    .footer { padding: 20px; text-align: center; color: #666; font-size: 14px; }
    .form-data { background-color: #e5e7eb; padding: 15px; border-radius: 8px; margin: 20px 0; }
    .field { margin-bottom: 10px; }
    .label { font-weight: bold; color: #374151; }
    .value { margin-top: 2px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting Conceptinero</h1>
    </div>
    <div class="content">
      <p>Dear ${data.name},</p>
      <p>Thank you for reaching out to Conceptinero! We have received your inquiry and appreciate your interest in our SR&ED tax credit services.</p>
      
      <div class="form-data">
        <h3 style="margin-top: 0; color: #374151;">Your Submitted Information:</h3>
        
        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${data.name}</div>
        </div>
        
        <div class="field">
          <div class="label">Email:</div>
          <div class="value">${data.email}</div>
        </div>
        
        ${
          data.phone
            ? `
        <div class="field">
          <div class="label">Phone:</div>
          <div class="value">${data.phone}</div>
        </div>
        `
            : ""
        }
        
        <div class="field">
          <div class="label">Company:</div>
          <div class="value">${data.company}</div>
        </div>
        
        <div class="field">
          <div class="label">Message:</div>
          <div class="value">${data.message}</div>
        </div>
      </div>
      
      <p>Our team of experts will review your message and get back to you within 24 hours with a personalized response.</p>
      <p>In the meantime, feel free to explore our <a href="https://conceptinero.com/blog">blog</a> for valuable insights about SR&ED tax credits and innovation financing.</p>
      <p>Best regards,<br>The Conceptinero Team</p>
    </div>
    <div class="footer">
      <p>Conceptinero - Maximizing Innovation Returns</p>
      <div style="margin: 15px 0;">
        <p><strong>Contact Us:</strong></p>
        <p>📧 Email: <a href="mailto:kevin@conceptinero.com" style="color: #2563eb;">kevin@conceptinero.com</a></p>
        <p>📞 Phone: <a href="tel:+16472999241" style="color: #2563eb;">+1 (647) 299 9241</a></p>
      </div>
      <p>This is an automated confirmation email. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;

// Email template for admin notification
const getAdminNotificationEmailHtml = (data: ContactFormData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #f9fafb; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #374151; }
    .value { margin-top: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Web Inquiry Received</h1>
    </div>
    <div class="content">
      <p>A new contact form submission has been received from the Conceptinero website.</p>
      
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${data.name}</div>
      </div>
      
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${data.email}</div>
      </div>
      
      ${
        data.phone
          ? `
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${data.phone}</div>
      </div>
      `
          : ""
      }
      
      <div class="field">
        <div class="label">Company:</div>
        <div class="value">${data.company}</div>
      </div>
      
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${data.message}</div>
      </div>
    </div>
  </div>
</body>
</html>
`;

// Send confirmation email to user
export const sendUserConfirmationEmail = async (data: ContactFormData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Conceptinero" <${process.env.SMTP_USER}>`,
    to: data.email,
    cc: "kevin@conceptinero.com",
    subject: "Thank you for contacting Conceptinero - We'll be in touch soon!",
    html: getUserConfirmationEmailHtml(data),
    headers: {
      "X-Priority": "1",
      "X-MSMail-Priority": "High",
      Importance: "high",
    },
  };

  return await transporter.sendMail(mailOptions);
};

// Send notification email to admin
export const sendAdminNotificationEmail = async (data: ContactFormData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Conceptinero Website" <${process.env.SMTP_USER}>`,
    to: "kevin@conceptinero.com",
    subject: `New Web Inquiry from ${data.name} - ${data.company}`,
    html: getAdminNotificationEmailHtml(data),
    headers: {
      "X-Priority": "1",
      "X-MSMail-Priority": "High",
      Importance: "high",
    },
  };

  return await transporter.sendMail(mailOptions);
};

// Main function to send both emails
export const sendContactFormEmails = async (data: ContactFormData) => {
  try {
    // Send both emails in parallel
    await Promise.all([
      sendUserConfirmationEmail(data),
      // sendAdminNotificationEmail(data),
    ]);

    return { success: true };
  } catch (error) {
    console.error("Error sending emails:", error);
    throw new Error("Failed to send emails");
  }
};
