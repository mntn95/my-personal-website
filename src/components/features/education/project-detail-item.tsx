interface ProjectDetailItemProps {
  label: string;
  content: string;
}

/**
 * Project detail item component
 * Displays a label with highlighted text followed by content
 * Used in the GraduationProject component
 */
const ProjectDetailItem = ({
  label,
  content,
}: ProjectDetailItemProps): React.ReactElement => (
  <p className="text-sm md:text-base">
    <span className="text-brand-primary font-medium">{label}:</span> {content}
  </p>
);

export { ProjectDetailItem };
