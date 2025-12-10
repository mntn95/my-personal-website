import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getFixedAnimationDelay } from "@/lib/utils";

/**
 * CTA button component for About section
 * Links to the full about page
 * Used in the About component
 */
export function CTAButton(): React.ReactElement {
	return (
		<div
			className="text-center animate-fadeInUp"
			style={getFixedAnimationDelay(0.6)}
		>
			<Link
				href="/about"
				className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all hover:scale-105 cursor-pointer font-medium"
			>
				More About Me
				<ArrowRight className="ml-2 h-4 w-4" />
			</Link>
		</div>
	);
}

