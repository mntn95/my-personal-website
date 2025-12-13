"use client";

import { User, Mail, FileText, MessageSquare, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import type { UseFormRegister, FormState } from "react-hook-form";
import { Button, Input, Textarea } from "@/components/ui";
import { StatusMessages } from "./status-messages";
import type { ContactFormData } from "@/lib/validation";

interface FormFieldsProps {
  register: UseFormRegister<ContactFormData>;
  formState: FormState<ContactFormData>;
  submitStatus: "idle" | "success" | "error";
}

/**
 * Contact form fields component
 * Renders all form inputs, submit button, status messages, and privacy notice
 * Used in the ContactFormContainer
 */
const FormFields = ({
  register,
  formState,
  submitStatus,
}: FormFieldsProps): React.ReactElement => {
  const t = useTranslations("ContactPage.form");
  const { errors, isSubmitting } = formState;

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
          {...register("name")}
          error={errors.name?.message}
          placeholder={t("namePlaceholder")}
        />

        {/* Email Field */}
        <Input
          label={t("email")}
          icon={Mail}
          type="email"
          id="email"
          {...register("email")}
          error={errors.email?.message}
          placeholder={t("emailPlaceholder")}
        />
      </div>

      {/* Subject Field */}
      <Input
        label={t("subject")}
        icon={FileText}
        type="text"
        id="subject"
        {...register("subject")}
        error={errors.subject?.message}
        placeholder={t("subjectPlaceholder")}
      />

      {/* Message Field */}
      <Textarea
        label={t("message")}
        icon={MessageSquare}
        id="message"
        rows={4}
        {...register("message")}
        error={errors.message?.message}
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
      <p className="text-xs text-gray-400 text-center">{t("privacyNotice")}</p>
    </>
  );
};

export { FormFields };
