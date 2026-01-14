"use client";

import { useTranslations } from "next-intl";
import { ListItem } from "@/components/ui";

/**
 * Examples section component for service card
 * Displays service examples in a list
 * Used in the ServiceCard component
 */
interface ExamplesSectionProps {
  examples: string[];
}

const ExamplesSection = ({
  examples,
}: ExamplesSectionProps): React.ReactElement => {
  const t = useTranslations("ServicesPage.sections");

  return (
    <div>
      <h4 className="text-white mb-3 font-semibold text-base">
        {t("examples")}
      </h4>
      <ul className="space-y-2">
        {examples.map((example, i) => (
          <ListItem key={i} icon="bullet">
            {example}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export { ExamplesSection };
