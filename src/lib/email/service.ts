import { Resend } from "resend";
import type { ContactFormData } from "@/lib/validation";
import { ContactNotificationEmail } from "./contact-notification-email";
import { renderEmailTemplate } from "./render-helper";
import { DEFAULT_FROM_EMAIL } from "./constants";

/**
 * Email service for handling contact form email operations
 */
export class EmailService {
  private resend: Resend;
  public readonly fromEmail: string;
  private recipientEmail: string;

  constructor() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is required");
    }

    this.resend = new Resend(apiKey);
    this.fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;
    this.recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || "mathieu.nguyen@proton.me";
  }

  /**
   * Sends notification email to the recipient
   *
   * @param formData - Contact form data
   * @returns Resend API result
   */
  async sendNotificationEmail(
    formData: ContactFormData
  ): Promise<{ data: { id: string } | null; error: unknown }> {
    const { name, email, subject, message } = formData;

    const html = await renderEmailTemplate(ContactNotificationEmail, {
      name,
      email,
      subject,
      message,
    });

    return await this.resend.emails.send({
      from: this.fromEmail,
      to: this.recipientEmail,
      replyTo: email,
      subject: `Nouvelle demande de contact: ${subject} de ${name} - ${email}`,
      html,
    });
  }
}
