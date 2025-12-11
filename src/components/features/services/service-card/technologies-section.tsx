"use client";

import { useTranslations } from "next-intl";
import { ListItem } from "@/components/ui";

/**
 * Technologies section component for service card
 * Displays technologies used in a styled list
 * Used in the ServiceCard component
 */
interface TechnologiesSectionProps {
	technologies?: string[];
}

export function TechnologiesSection({
	technologies,
}: TechnologiesSectionProps): React.ReactElement | null {
	const t = useTranslations("ServicesPage.sections");

	if (!technologies) {
		return null;
	}

	return (
		<div className="mb-6">
			<h4 className="text-white mb-3 font-semibold text-base">
				{t("technologiesUsed")}
			</h4>
			<div className="bg-dark-bg/30 p-4 rounded-lg border border-card-border/50">
				<ul className="space-y-2">
					{technologies.map((tech, i) => (
						<ListItem key={i} icon="arrow">
							{tech}
						</ListItem>
					))}
				</ul>
			</div>
		</div>
	);
}

