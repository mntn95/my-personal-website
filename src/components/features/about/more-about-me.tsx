import { FeatureCard, IconWrapper } from "@/components/common";
import { ListItem } from "@/components/ui";
import { moreAboutMeCards } from "@/data/about";

/**
 * More About Me section component displaying personal interests, philosophy, education, and goals
 * Used in the About page
 */
export function MoreAboutMeSection(): React.ReactElement {
  return (
    <div className="animate-fadeInUp">
      <div className="text-center mb-12">
        <h2 className="text-3xl mb-6 font-bold">More About Me</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {moreAboutMeCards.map((card, index) => (
          <FeatureCard
            key={index}
            variant="default"
            hover
            className="animate-fadeInUp"
            style={
              {
                animationDelay: card.animationDelay,
              } as React.CSSProperties
            }
          >
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <IconWrapper icon={card.icon} size="md" />
              </div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
            <ul className="space-y-2 text-gray-400">
              {card.items.map((item, itemIndex) => (
                <ListItem
                  key={itemIndex}
                  icon="custom"
                  customIcon={<card.listIcon className="h-4 w-4" />}
                  className="mb-2 font-normal"
                >
                  {item}
                </ListItem>
              ))}
            </ul>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
}
