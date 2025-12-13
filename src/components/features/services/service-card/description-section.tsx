/**
 * Description section component for service card
 * Displays service description paragraphs
 * Used in the ServiceCard component
 */
interface DescriptionSectionProps {
  description: string[];
}

const DescriptionSection = ({
  description,
}: DescriptionSectionProps): React.ReactElement => (
  <div className="space-y-3 mb-6">
    {description.map((desc, i) => (
      <p key={i} className="text-gray-400 leading-relaxed text-sm text-justify">
        {desc}
      </p>
    ))}
  </div>
);

export { DescriptionSection };
