import { getTranslations } from "next-intl/server";
import { FeatureCard, IconWrapper, SectionHeader } from "@/components/common";
import { ListItem } from "@/components/ui";
import { moreAboutMeCards } from "@/data/about";

/**
 * More About Me section component displaying personal interests, philosophy, education, and goals
 * Used in the About page
 *
 * @async
 * @returns Promise resolving to React element
 */
const MoreAboutMeSection = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  return (
    <div>
      <SectionHeader
        title={t("AboutPage.moreAboutMe.title")}
        className="mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {moreAboutMeCards.map((card, index) => (
          <FeatureCard
            key={index}
            variant="default"
            hover
            animationFixedDelay={
              parseFloat(card.animationDelay.replace(/s$/, "")) || 0
            }
          >
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <IconWrapper icon={card.icon} size="md" />
              </div>
              <h3 className="text-md md:text-xl font-semibold">
                {card.title.startsWith("AboutPage.")
                  ? t(card.title)
                  : card.title}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-400">
              {card.items.map((item, itemIndex) => (
                <ListItem
                  key={itemIndex}
                  icon="custom"
                  customIcon={<card.listIcon className="h-4 w-4" />}
                  className="mb-2 text-sm md:text-base"
                >
                  {item.startsWith("AboutPage.") ? t(item) : item}
                </ListItem>
              ))}
            </ul>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
};

export { MoreAboutMeSection };
