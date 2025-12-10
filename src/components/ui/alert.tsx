import React from "react";
import {
	CheckCircle2,
	XCircle,
	AlertTriangle,
	Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertProps {
	variant?: "success" | "error" | "warning" | "info";
	title?: string;
	children: React.ReactNode;
	className?: string;
}

const variantConfig = {
	success: {
		bg: "bg-teal-500/10",
		border: "border-teal-500/20",
		text: "text-teal-500",
		icon: CheckCircle2,
	},
	error: {
		bg: "bg-red-500/10",
		border: "border-red-500/20",
		text: "text-red-500",
		icon: XCircle,
	},
	warning: {
		bg: "bg-yellow-500/10",
		border: "border-yellow-500/20",
		text: "text-yellow-500",
		icon: AlertTriangle,
	},
	info: {
		bg: "bg-blue-500/10",
		border: "border-blue-500/20",
		text: "text-blue-500",
		icon: Info,
	},
};

/**
 * Alert component for displaying success, error, warning, or info messages
 * Automatically includes appropriate icons and styling for each variant
 *
 * @example
 * <Alert variant="success">Operation completed successfully!</Alert>
 * <Alert variant="error" title="Error">Something went wrong.</Alert>
 */
export const Alert = ({
	variant = "info",
	title,
	children,
	className,
}: AlertProps): React.ReactElement => {
	const config = variantConfig[variant];
	const Icon = config.icon;

	return (
		<div
			className={cn(
				"p-4 rounded-lg border text-center",
				config.bg,
				config.border,
				className
			)}
		>
			<div className="flex items-center justify-center gap-2">
				<Icon className={cn("h-5 w-5", config.text)} />
				{title ? (
					<div>
						<p className={cn("font-medium", config.text)}>{title}</p>
						<p className={cn("text-sm mt-1", config.text)}>{children}</p>
					</div>
				) : (
					<p className={cn("font-medium", config.text)}>{children}</p>
				)}
			</div>
		</div>
	);
};

