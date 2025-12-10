import { User, Mail, FileText, MessageSquare, Send } from "lucide-react";
import { Button, Input, Textarea } from "@/components/ui";
import { StatusMessages } from "./status-messages";

interface FormFieldsProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
}

/**
 * Contact form fields component
 * Renders all form inputs, submit button, status messages, and privacy notice
 * Used in the ContactFormContainer
 */
export function FormFields({
  formData,
  onChange,
  isSubmitting,
  submitStatus,
}: FormFieldsProps): React.ReactElement {
  return (
    <>
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Field */}
        <Input
          label="Your Name"
          icon={User}
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={onChange}
          placeholder="John Smith"
        />

        {/* Email Field */}
        <Input
          label="Email"
          icon={Mail}
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={onChange}
          placeholder="you@example.com"
        />
      </div>

      {/* Subject Field */}
      <Input
        label="Subject"
        icon={FileText}
        type="text"
        id="subject"
        name="subject"
        required
        value={formData.subject}
        onChange={onChange}
        placeholder="Project inquiry / Job opportunity / Collaboration..."
      />

      {/* Message Field */}
      <Textarea
        label="Message"
        icon={MessageSquare}
        id="message"
        name="message"
        required
        rows={4}
        value={formData.message}
        onChange={onChange}
        placeholder="Tell me more about your project, your timeline, and what you're looking to achieve..."
      />

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          fullWidth
          icon={Send}
          iconPosition="left"
          isLoading={isSubmitting}
          loadingText="Sending..."
          className="bg-brand-primary hover:bg-brand-primary-dark"
        >
          Send Message
        </Button>
      </div>

      {/* Status Messages */}
      <StatusMessages submitStatus={submitStatus} />

      {/* Privacy Notice */}
      <p className="text-xs text-gray-400 text-center">
        I value your privacy. Your information will never be shared with third
        parties.
      </p>
    </>
  );
}
