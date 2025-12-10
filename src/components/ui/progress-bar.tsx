import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
	value: number;
	max?: number;
	label?: string;
	showLabel?: boolean;
	className?: string;
	barClassName?: string;
	animated?: boolean;
}

/**
 * Progress bar component for displaying skill levels or progress
 * Supports animation and custom styling
 *
 * @example
 * <ProgressBar value={85} label="React" showLabel />
 */
export const ProgressBar = ({
	value,
	max = 100,
	label,
	showLabel = false,
	className,
	barClassName,
	animated = true,
}: ProgressBarProps): React.ReactElement => {
	const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

	return (
		<div className={cn("w-full", className)}>
			{label && (
				<div className="flex justify-between items-center mb-2">
					<h3 className="text-lg font-medium">{label}</h3>
					{showLabel && (
						<span className="text-sm text-gray-400 font-normal">
							{value}%
						</span>
					)}
				</div>
			)}
			<div className="w-full h-2 bg-dark-bg-alt rounded-full overflow-hidden">
				<div
					className={cn(
						"h-full bg-teal-500 transition-all duration-1000 ease-out",
						barClassName
					)}
					style={{
						width: animated ? `${percentage}%` : "0%",
					}}
				/>
			</div>
		</div>
	);
};

