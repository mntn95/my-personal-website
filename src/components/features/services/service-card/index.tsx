import { FeatureCard, IconWrapper } from "@/components/common";
import type { DetailedService } from "@/types";
import { getAnimationDelay } from "@/lib/utils";
import { DescriptionSection } from "./description-section";
import { ApproachSection } from "./approach-section";
import { TechnologiesSection } from "./technologies-section";
import { ExamplesSection } from "./examples-section";
import { CTAButton } from "./cta-button";

interface ServiceCardProps {
	service: DetailedService;
	index: number;
}

/**
 * Service card component displaying detailed service information
 * Shows icon, title, subtitle, description, approach/what's included, technologies, and examples
 * Used in the Services page
 */
export function ServiceCard({
	service,
	index,
}: ServiceCardProps): React.ReactElement {
	return (
		<FeatureCard
			key={index}
			variant="default"
			hover
			className="p-4 sm:p-8 animate-fadeInUp flex flex-col"
			style={
				{
					...getAnimationDelay(index),
					scrollMarginTop: "100px",
				} as React.CSSProperties
			}
		>
			<div id={service.id} className="flex flex-col lg:flex-row lg:items-start">
				<div className="mb-4 lg:mb-0 lg:mr-4 flex-shrink-0 self-center lg:self-auto">
					<IconWrapper icon={service.icon} size="lg" />
				</div>
				<div className="flex-1">
					<h3 className="text-xl sm:text-2xl mb-2 text-white text-center lg:text-left font-semibold">
						{service.title}
					</h3>
					<p className="text-gray-300 mb-6 text-center lg:text-left text-base font-medium">
						{service.subtitle}
					</p>

					<DescriptionSection description={service.description} />
					<ApproachSection
						approach={service.approach}
						whatIncluded={service.whatIncluded}
					/>
					<TechnologiesSection technologies={service.technologies} />
					<ExamplesSection examples={service.examples} />
				</div>
			</div>

			<CTAButton />
		</FeatureCard>
	);
}

