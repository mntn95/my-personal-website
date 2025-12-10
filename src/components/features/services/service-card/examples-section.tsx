import { ListItem } from "@/components/ui";

/**
 * Examples section component for service card
 * Displays service examples in a list
 * Used in the ServiceCard component
 */
interface ExamplesSectionProps {
	examples: string[];
}

export function ExamplesSection({
	examples,
}: ExamplesSectionProps): React.ReactElement {
	return (
		<div>
			<h4 className="text-white mb-3 font-semibold text-base">Examples</h4>
			<ul className="space-y-2">
				{examples.map((example, i) => (
					<ListItem key={i} icon="bullet">
						{example}
					</ListItem>
				))}
			</ul>
		</div>
	);
}

