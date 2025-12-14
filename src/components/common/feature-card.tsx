import React from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionDelay, getMotionFixedDelay } from "@/lib/motion/utils";

interface FeatureCardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "flat";
  hover?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  // Animation props
  animationEnabled?: boolean;
  animationIndex?: number;
  animationDelayStep?: number;
  animationFixedDelay?: number;
  animationClassName?: string;
}

/**
 * Reusable feature card component with consistent styling and built-in animations
 * Use for feature showcases and project cards with hover effects
 * Replaces 10+ duplicate card patterns across the codebase
 *
 * @example
 * <FeatureCard variant="default" hover>
 *   <h2>Title</h2>
 *   <p>Content</p>
 * </FeatureCard>
 *
 * @example
 * <FeatureCard
 *   variant="default"
 *   hover
 *   animationEnabled
 *   animationIndex={0}
 *   animationDelayStep={0.1}
 * >
 *   <h2>Animated Title</h2>
 * </FeatureCard>
 */
const FeatureCard = ({
  children,
  variant = "default",
  hover = true,
  className,
  style,
  id,
  animationEnabled = true,
  animationIndex,
  animationDelayStep = 0.1,
  animationFixedDelay,
  animationClassName,
}: FeatureCardProps): React.ReactElement => {
  const variantClasses = {
    default: "bg-card-bg border border-card-border p-8",
    elevated: "bg-card-bg border border-card-border p-6 shadow-lg",
    flat: "bg-card-border p-4",
  };

  const cardContent = (
    <div
      className={cn(
        "rounded-lg transition-all",
        variantClasses[variant],
        hover && "hover:border-teal-500/50",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );

  if (!animationEnabled) {
    return cardContent;
  }

  // Calculate transition based on props
  let transition;
  if (animationFixedDelay !== undefined) {
    transition = getMotionFixedDelay(animationFixedDelay);
  } else if (animationIndex !== undefined) {
    transition = getMotionDelay(animationIndex, animationDelayStep);
  }

  return (
    <motion.div
      id={id}
      className={animationClassName}
      style={{ scrollMarginTop: "100px" }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
      transition={transition}
    >
      {cardContent}
    </motion.div>
  );
};

export { FeatureCard };
