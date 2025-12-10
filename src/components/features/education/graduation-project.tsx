import Image from "next/image";
import { Award } from "lucide-react";
import { FeatureCard, IconWrapper } from "@/components/common";
import { ProjectDetailItem } from "./project-detail-item";

/**
 * Graduation project section component
 * Displays details about the graduation project with image
 * Used in the Education page
 */
export function GraduationProject(): React.ReactElement {
	return (
		<div className="animate-fadeInUp">
			<h2 className="mb-12 text-center text-white text-3xl font-bold">
				Graduation Project
			</h2>
			<FeatureCard variant="default" hover className="overflow-hidden">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
					{/* Text Content - Left Side */}
					<div className="p-8 lg:p-10 flex flex-col justify-center">
						<div className="flex items-center mb-6">
							<IconWrapper icon={Award} size="md" className="mr-4" />
							<h3 className="text-white text-2xl font-semibold">
								Interactive RPG Platform
							</h3>
						</div>
						<div className="space-y-4 text-gray-400">
							<p>
								{" "}
								Developed as a team of 4 developers, this comprehensive
								role-playing game platform features an interactive board
								with real-time player movements, creating an immersive
								gaming experience.
							</p>
							<ProjectDetailItem
								label="Key Features"
								content="Interactive game board with live character movements (round tokens), tabletop dice rolling system, toggleable tutorial overlay for new players, map selector, and integrated chat powered by WebSockets (Express.js)."
							/>
							<ProjectDetailItem
								label="Tech Stack"
								content="Full-stack JavaScript architecture (React/Node.js/Express) with real-time communication handling and support for multiple simultaneous connections."
							/>
							<ProjectDetailItem
								label="Methodology"
								content="Agile development with weekly sprints and systematic code reviews, ensuring high-quality collaborative development."
							/>
						</div>
					</div>

					{/* Image - Right Side */}
					<div className="relative h-full min-h-[300px] lg:min-h-[400px]">
						<Image
							src="/images/project-rpg-platform.png"
							alt="Interactive RPG Platform - Game Board Interface"
							fill
							className="object-contain rounded-lg p-8 max-w-[75%] max-h-[75%]"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>
				</div>
			</FeatureCard>
		</div>
	);
}

