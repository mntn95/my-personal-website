"use client";

import { User, Mail, FileText, MessageSquare, Send } from "lucide-react";
import { useTranslations } from "next-intl";
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
const FormFields = ({
  formData,
  onChange,
  isSubmitting,
  submitStatus,
}: FormFieldsProps): React.ReactElement => {
  const t = useTranslations("ContactPage.form");

  return (
    <>
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Field */}
        <Input
          label={t("yourName")}
          icon={User}
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={onChange}
          placeholder={t("namePlaceholder")}
        />

        {/* Email Field */}
        <Input
          label={t("email")}
          icon={Mail}
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={onChange}
          placeholder={t("emailPlaceholder")}
        />
      </div>

      {/* Subject Field */}
      <Input
        label={t("subject")}
        icon={FileText}
        type="text"
        id="subject"
        name="subject"
        required
        value={formData.subject}
        onChange={onChange}
        placeholder={t("subjectPlaceholder")}
      />

      {/* Message Field */}
      <Textarea
        label={t("message")}
        icon={MessageSquare}
        id="message"
        name="message"
        required
        rows={4}
        value={formData.message}
        onChange={onChange}
        placeholder={t("messagePlaceholder")}
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
          loadingText={t("sending")}
          className="bg-brand-primary hover:bg-brand-primary-dark"
        >
          {t("sendMessage")}
        </Button>
      </div>

      {/* Status Messages */}
      <StatusMessages submitStatus={submitStatus} />

      {/* Privacy Notice */}
      <p className="text-xs text-gray-400 text-center">
        {t("privacyNotice")}
      </p>
    </>
  );
};

export { FormFields };
