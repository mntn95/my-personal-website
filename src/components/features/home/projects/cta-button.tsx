import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getFixedAnimationDelay } from "@/lib/utils";

/**
 * CTA button component for Projects section
 * Links to the full projects page
 * Used in the Projects component
 */
const CTAButton = (): React.ReactElement => (
  <div
    className="mt-12 text-center animate-fadeInUp"
    style={getFixedAnimationDelay(0.4)}
  >
    <Link
      href="/projects"
      className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all hover:scale-105 cursor-pointer font-medium"
    >
      View All Projects
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </div>
);

export { CTAButton };
