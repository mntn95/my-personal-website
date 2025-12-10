import Link from "next/link";
import { Mail } from "lucide-react";

/**
 * CTA button component for service card
 * Links to the contact page
 * Used in the ServiceCard component
 */
export function CTAButton(): React.ReactElement {
	return (
		<div className="flex justify-center mt-8">
			<Link
				href="/contact"
				className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-500/90 hover:scale-105 transition-all duration-300 cursor-pointer font-medium"
			>
				<Mail className="mr-2 h-5 w-5" />
				Get in Touch
			</Link>
		</div>
	);
}

