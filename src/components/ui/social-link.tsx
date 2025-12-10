import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
	href: string;
	icon: LucideIcon;
	label: string;
	variant?: "square" | "rounded";
	size?: "sm" | "md" | "lg";
	className?: string;
	target?: "_blank" | undefined;
	rel?: "noopener noreferrer" | undefined;
}

const sizeClasses = {
	sm: "w-8 h-8",
	md: "w-10 h-10",
	lg: "w-12 h-12",
};

const iconSizeClasses = {
	sm: "h-4 w-4",
	md: "h-5 w-5",
	lg: "h-6 w-6",
};

/**
 * Social link component for displaying social media icons
 * Supports square and rounded variants with different sizes
 *
 * @example
 * <SocialLink
 *   href="https://github.com/user"
 *   icon={Github}
 *   label="GitHub"
 *   variant="square"
 *   size="md"
 * />
 */
export const SocialLink = ({
	href,
	icon: Icon,
	label,
	variant = "square",
	size = "md",
	className,
	target,
	rel,
}: SocialLinkProps): React.ReactElement => {
	// Email links should not have target="_blank"
	const isEmail = href.startsWith("mailto:");
	const finalTarget = target !== undefined ? target : isEmail ? undefined : "_blank";
	const finalRel = rel !== undefined ? rel : isEmail ? undefined : "noopener noreferrer";

	return (
		<a
			href={href}
			target={finalTarget}
			rel={finalRel}
			className={cn(
				"flex items-center justify-center",
				variant === "rounded"
					? "text-gray-400 hover:text-teal-500 transition-colors bg-card-bg p-3 rounded-full hover:scale-110"
					: "bg-card-border rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300",
				"cursor-pointer",
				sizeClasses[size],
				className
			)}
			aria-label={label}
		>
			<Icon className={iconSizeClasses[size]} />
		</a>
	);
};

