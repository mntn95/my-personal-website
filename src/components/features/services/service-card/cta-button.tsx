import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

/**
 * CTA button component for service card
 * Links to the contact page
 * Used in the ServiceCard component
 */
const CTAButton = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("ServicesPage");

  return (
    <div className="flex justify-center mt-8">
      <Button asChild variant="primary" icon={Mail} iconPosition="left">
        <Link href="/contact">{t("getInTouch")}</Link>
      </Button>
    </div>
  );
};

export { CTAButton };
