"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FeatureCard } from "@/components/common";
import { FormFields } from "./fields";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";

/**
 * Contact form container component
 * Handles form state management, change handlers, and submission logic
 * Renders the form wrapper and delegates field rendering to FormFields
 * Used in the Contact page
 */
const ContactFormContainer = (): React.ReactElement => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const { register, handleSubmit, formState, reset } = useForm<ContactFormData>(
    {
      resolver: zodResolver(contactFormSchema),
      defaultValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    }
  );

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check if response is ok before parsing JSON
      if (!response.ok) {
        // Try to parse error response, but handle non-JSON responses
        try {
          const errorResult = await response.json();
          console.error("[Form] API error:", errorResult);
        } catch {
          // Response is not JSON, use status text
          console.error(
            "[Form] API error:",
            response.status,
            response.statusText
          );
        }
        setSubmitStatus("error");
        return;
      }

      // Parse successful response
      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("[Form] Failed to parse response:", parseError);
        setSubmitStatus("error");
        return;
      }

      if (result.success) {
        reset();
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      // Handle network errors or other fetch failures
      console.error("[Form] Network or fetch error:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <FeatureCard variant="elevated" hover animationFixedDelay={0.1}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormFields
          register={register}
          formState={formState}
          submitStatus={submitStatus}
        />
      </form>
    </FeatureCard>
  );
};

export { ContactFormContainer };
