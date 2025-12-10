import { SectionHeader } from "@/components/common";
import { SectionLayout } from "@/components/layouts/section-layout";
import { ProjectsGrid } from "./projects-grid";
import { CTAButton } from "./cta-button";

/**
 * Projects section component for homepage
 * Displays featured projects and CTA to full projects page
 * Used in the homepage
 */
export function Projects(): React.ReactElement {
	return (
		<SectionLayout id="projects" background="darker">
			<div className="container mx-auto px-4">
				<SectionHeader
					title="Featured Projects"
					description="A selection of my recent web development projects."
				/>

				<ProjectsGrid />
				<CTAButton />
			</div>
		</SectionLayout>
	);
}

