/**
 * Description section component for service card
 * Displays service description paragraphs
 * Used in the ServiceCard component
 */
interface DescriptionSectionProps {
	description: string[];
}

export function DescriptionSection({
	description,
}: DescriptionSectionProps): React.ReactElement {
	return (
		<div className="space-y-3 mb-6">
			{description.map((desc, i) => (
				<p key={i} className="text-gray-400 leading-relaxed text-sm">
					{desc}
				</p>
			))}
		</div>
	);
}

