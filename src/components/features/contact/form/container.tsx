"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FeatureCard } from "@/components/common";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionFixedDelay } from "@/lib/motion/utils";
import { FormFields } from "./fields";

/**
 * Contact form container component
 * Handles form state management, change handlers, and submission logic
 * Renders the form wrapper and delegates field rendering to FormFields
 * Used in the Contact page
 */
const ContactFormContainer = (): React.ReactElement => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus("success");
    } catch {
      // Error handling
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
      transition={getMotionFixedDelay(0.1)}
    >
      <FeatureCard variant="elevated" hover>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormFields
            formData={formData}
            onChange={handleChange}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
          />
        </form>
      </FeatureCard>
    </motion.div>
  );
};

export { ContactFormContainer };
