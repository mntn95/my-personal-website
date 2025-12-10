import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
	title?: string;
	description: string;
	icon?: LucideIcon;
	action?: React.ReactNode;
	className?: string;
}

/**
 * Empty state component for displaying messages when no content is available
 * Useful for empty lists, search results, or error states
 *
 * @example
 * <EmptyState
 *   description="No projects found matching your criteria."
 *   icon={Search}
 * />
 */
export const EmptyState = ({
	title,
	description,
	icon: Icon,
	action,
	className,
}: EmptyStateProps): React.ReactElement => {
	return (
		<div className={cn("text-center py-20", className)}>
			{Icon && (
				<div className="flex justify-center mb-4">
					<Icon className="h-12 w-12 text-gray-400" />
				</div>
			)}
			{title && (
				<h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
			)}
			<p className="text-gray-400 text-lg">{description}</p>
			{action && <div className="mt-6">{action}</div>}
		</div>
	);
};

