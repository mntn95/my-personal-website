import React, { useId } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	icon?: LucideIcon;
	error?: string;
	helperText?: string;
}

/**
 * Reusable input component with consistent styling
 * Supports labels, icons, error states, and helper text
 *
 * @example
 * <Input
 *   label="Your Name"
 *   icon={User}
 *   type="text"
 *   placeholder="John Smith"
 * />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ label, icon: Icon, error, helperText, className, id, ...props }, ref) => {
		const generatedId = useId();
		const inputId = id || generatedId;

		return (
			<div className="space-y-1">
				{label && (
					<label
						htmlFor={inputId}
						className="block text-sm text-white font-medium"
					>
						{label}
					</label>
				)}
				<div className="relative">
					{Icon && (
						<Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
					)}
					<input
						ref={ref}
						id={inputId}
						className={cn(
							"w-full pl-10 pr-4 py-2.5 bg-card-border text-white rounded-lg",
							"focus:outline-none focus:ring-2 focus:ring-teal-500",
							"disabled:opacity-50 text-sm border border-transparent",
							"hover:border-teal-500/30 transition-colors",
							!Icon && "pl-4",
							error && "border-red-500/50 focus:ring-red-500",
							className
						)}
						{...props}
					/>
				</div>
				{error && <p className="text-sm text-red-500">{error}</p>}
				{helperText && !error && (
					<p className="text-sm text-gray-400">{helperText}</p>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";

// Textarea component
interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	icon?: LucideIcon;
	error?: string;
	helperText?: string;
}

/**
 * Reusable textarea component with consistent styling
 * Supports labels, icons, error states, and helper text
 *
 * @example
 * <Textarea
 *   label="Message"
 *   icon={MessageSquare}
 *   rows={4}
 *   placeholder="Your message..."
 * />
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ label, icon: Icon, error, helperText, className, id, ...props }, ref) => {
		const generatedId = useId();
		const textareaId = id || generatedId;

		return (
			<div className="space-y-1">
				{label && (
					<label
						htmlFor={textareaId}
						className="block text-sm text-white font-medium"
					>
						{label}
					</label>
				)}
				<div className="relative">
					{Icon && (
						<Icon className="absolute left-3 top-4 text-gray-400 w-4 h-4 pointer-events-none" />
					)}
					<textarea
						ref={ref}
						id={textareaId}
						className={cn(
							"w-full pl-10 pr-4 py-2.5 bg-card-border text-white rounded-lg",
							"focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none",
							"disabled:opacity-50 text-sm border border-transparent",
							"hover:border-teal-500/30 transition-colors",
							!Icon && "pl-4",
							error && "border-red-500/50 focus:ring-red-500",
							className
						)}
						{...props}
					/>
				</div>
				{error && <p className="text-sm text-red-500">{error}</p>}
				{helperText && !error && (
					<p className="text-sm text-gray-400">{helperText}</p>
				)}
			</div>
		);
	}
);

Textarea.displayName = "Textarea";

