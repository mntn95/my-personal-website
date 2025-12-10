interface ProjectDetailItemProps {
	label: string;
	content: string;
}

/**
 * Project detail item component
 * Displays a label with highlighted text followed by content
 * Used in the GraduationProject component
 */
export function ProjectDetailItem({
	label,
	content,
}: ProjectDetailItemProps): React.ReactElement {
	return (
		<p>
			<span className="text-brand-primary font-medium">{label}:</span>{" "}
			{content}
		</p>
	);
}

