"use client";

import { useTranslations } from "next-intl";
import { Alert } from "@/components/ui";

interface StatusMessagesProps {
  submitStatus: "idle" | "success" | "error";
}

/**
 * Status messages component for contact form
 * Displays success or error alerts based on form submission status
 * Used in the FormFields component
 */
const StatusMessages = ({
  submitStatus,
}: StatusMessagesProps): React.ReactElement | null => {
  const t = useTranslations("ContactPage.form");

  if (submitStatus === "success") {
    return (
      <Alert variant="success" className="mt-4">
        {t("successMessage")}
      </Alert>
    );
  }

  if (submitStatus === "error") {
    return (
      <Alert variant="error" className="mt-4">
        {t("errorMessage")}
      </Alert>
    );
  }

  return null;
};

export { StatusMessages };
