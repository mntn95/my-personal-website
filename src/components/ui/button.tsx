import React from "react";
import type { LucideIcon } from "lucide-react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  asChild?: boolean;
}

const variantClasses = {
  primary: "bg-teal-500 text-white hover:bg-teal-600",
  secondary: "bg-card-bg text-white hover:bg-card-hover",
  outline: "border border-card-border text-white hover:bg-card-border",
  ghost: "text-white hover:bg-card-border",
};

/**
 * Reusable button component with consistent styling
 * Supports multiple variants, sizes, icons, and loading states
 *
 * @example
 * <Button variant="primary" icon={ArrowRight} iconPosition="right">
 *   Get Started
 * </Button>
 * <Button variant="secondary" isLoading loadingText="Loading...">
 *   Submit
 * </Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      icon: Icon,
      iconPosition = "right",
      isLoading = false,
      loadingText,
      fullWidth = false,
      className,
      disabled,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center px-4 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-lg transition-all font-medium cursor-pointer",
      "hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed",
      variantClasses[variant],
      fullWidth && "w-full",
      className
    );

    const content = isLoading ? (
      <>
        <Loader2
          className={cn(
            "animate-spin",
            iconPosition === "left" ? "mr-2" : "ml-2",
            Icon ? "h-4 w-4" : ""
          )}
        />
        {loadingText || children}
      </>
    ) : (
      <>
        {Icon && iconPosition === "left" && <Icon className="mr-2 h-4 w-4" />}
        {children}
        {Icon && iconPosition === "right" && <Icon className="ml-2 h-4 w-4" />}
      </>
    );

    if (asChild) {
      if (!React.isValidElement(children)) {
        throw new Error(
          "Button with asChild requires a single valid React element as children"
        );
      }

      const childProps = children.props as Record<string, unknown>;
      const mergedProps = {
        className: cn(
          buttonClasses,
          typeof childProps?.className === "string" ? childProps.className : ""
        ),
        ...props,
      };

      return React.cloneElement(
        children,
        mergedProps,
        <>
          {Icon && iconPosition === "left" && <Icon className="mr-2 h-4 w-4" />}
          {childProps.children as React.ReactNode}
          {Icon && iconPosition === "right" && (
            <Icon className="ml-2 h-4 w-4" />
          )}
        </>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={buttonClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
