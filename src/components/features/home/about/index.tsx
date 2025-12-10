"use client";

import { SectionHeader } from "@/components/common";
import { SectionLayout } from "@/components/layouts/section-layout";
import { SkillsGrid } from "./skills-grid";
import { CTAButton } from "./cta-button";

/**
 * About section component for homepage
 * Displays skills with progress bars and CTA to full about page
 * Used in the homepage
 */
export function About(): React.ReactElement {
	return (
		<SectionLayout id="about" background="darker">
			<div className="container mx-auto px-4">
				<SectionHeader
					title="Who I Am"
					description="I'm a Freelance Front-End Developer with 7 years of experience helping businesses and startups build clean, modern, and easy-to-use websites."
				/>

				<SkillsGrid />
				<CTAButton />
			</div>
		</SectionLayout>
	);
}

