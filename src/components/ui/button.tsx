import React from "react";
import type { LucideIcon } from "lucide-react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
	icon?: LucideIcon;
	iconPosition?: "left" | "right";
	isLoading?: boolean;
	loadingText?: string;
	fullWidth?: boolean;
}

const variantClasses = {
	primary: "bg-teal-500 text-white hover:bg-teal-600",
	secondary: "bg-card-bg text-white hover:bg-card-hover",
	outline: "border border-card-border text-white hover:bg-card-border",
	ghost: "text-white hover:bg-card-border",
};

const sizeClasses = {
	sm: "px-4 py-2 text-sm",
	md: "px-6 py-3 text-base",
	lg: "px-8 py-4 text-lg",
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
			size = "md",
			icon: Icon,
			iconPosition = "right",
			isLoading = false,
			loadingText,
			fullWidth = false,
			className,
			disabled,
			children,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				disabled={disabled || isLoading}
				className={cn(
					"inline-flex items-center justify-center rounded-lg transition-all font-medium cursor-pointer",
					"hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed",
					variantClasses[variant],
					sizeClasses[size],
					fullWidth && "w-full",
					className
				)}
				{...props}
			>
				{isLoading ? (
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
						{Icon && iconPosition === "left" && (
							<Icon className="mr-2 h-4 w-4" />
						)}
						{children}
						{Icon && iconPosition === "right" && (
							<Icon className="ml-2 h-4 w-4" />
						)}
					</>
				)}
			</button>
		);
	}
);

Button.displayName = "Button";

export { Button };

