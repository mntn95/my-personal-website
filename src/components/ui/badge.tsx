import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?: "default" | "teal" | "purple" | "green" | "outline";
	size?: "sm" | "md" | "lg";
	interactive?: boolean;
	active?: boolean;
}

const variantClasses = {
	default: "bg-card-border text-gray-300",
	teal: "bg-teal-500/20 text-teal-500 border border-teal-500/20",
	purple: "bg-purple-400/20 text-purple-400",
	green: "bg-green-500/20 text-green-400",
	outline: "bg-teal-500/10 text-teal-500 border border-teal-500/20",
};

const sizeClasses = {
	sm: "py-1 px-2 text-xs",
	md: "py-1 px-3 text-sm",
	lg: "py-2 px-4 text-base",
};

/**
 * Reusable badge/tag component with consistent styling
 * Supports multiple variants, sizes, and interactive states
 *
 * @example
 * <Badge variant="default" size="sm">React</Badge>
 * <Badge variant="teal" interactive active>Active Filter</Badge>
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	(
		{
			variant = "default",
			size = "md",
			interactive = false,
			active = false,
			className,
			...props
		},
		ref
	) => {
		const baseClasses = "rounded-full font-medium transition-colors";
		const interactiveClasses = interactive
			? "cursor-pointer hover:bg-card-border/80"
			: "";

		return (
			<span
				ref={ref}
				className={cn(
					baseClasses,
					variantClasses[variant],
					sizeClasses[size],
					interactiveClasses,
					interactive &&
						active &&
						variant === "default" &&
						"bg-teal-500 text-white",
					className
				)}
				{...props}
			/>
		);
	}
);

Badge.displayName = "Badge";

