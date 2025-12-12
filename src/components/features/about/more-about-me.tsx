import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";
import { FeatureCard, IconWrapper } from "@/components/common";
import { ListItem } from "@/components/ui";
import { moreAboutMeCards } from "@/data/about";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionFixedDelay } from "@/lib/motion/utils";

/**
 * More About Me section component displaying personal interests, philosophy, education, and goals
 * Used in the About page
 */
const MoreAboutMeSection = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl mb-6 font-bold">
          {t("AboutPage.moreAboutMe.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {moreAboutMeCards.map((card, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={fadeInUp}
            transition={getMotionFixedDelay(
              parseFloat(card.animationDelay.replace(/s$/, "")) || 0
            )}
          >
            <FeatureCard variant="default" hover>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <IconWrapper icon={card.icon} size="md" />
                </div>
                <h3 className="text-xl font-semibold">
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
                    className="mb-2 font-normal"
                  >
                    {item.startsWith("AboutPage.") ? t(item) : item}
                  </ListItem>
                ))}
              </ul>
            </FeatureCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export { MoreAboutMeSection };
