import { ListItem } from "@/components/ui";

/**
 * Approach/What's Included section component for service card
 * Displays approach or what's included items in a styled list
 * Used in the ServiceCard component
 */
interface ApproachSectionProps {
	approach?: string[];
	whatIncluded?: string[];
}

export function ApproachSection({
	approach,
	whatIncluded,
}: ApproachSectionProps): React.ReactElement | null {
	if (!approach && !whatIncluded) {
		return null;
	}

	const items = approach || whatIncluded;
	const title = approach ? "My Approach" : "What's Included";

	return (
		<div className="mb-6">
			<h4 className="text-white mb-3 font-semibold text-base">{title}</h4>
			<div className="bg-dark-bg/30 p-4 rounded-lg border border-card-border/50">
				<ul className="space-y-2">
					{items?.map((item, i) => (
						<ListItem key={i} icon="check">
							{item}
						</ListItem>
					))}
				</ul>
			</div>
		</div>
	);
}

