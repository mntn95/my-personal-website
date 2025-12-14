import { getTranslations } from "next-intl/server";
import Link from "next/link";

const NotFound = async () => {
  const t = await getTranslations("NotFound");

  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-8 md:pt-16"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-8 text-[50px] font-bold leading-none text-brand-primary sm:text-[80px] md:text-[100px]">
                {t("badge")}
              </h2>
              <h4 className="mb-8 text-[22px] font-semibold leading-tight text-white">
                {t("title")}
              </h4>
              <p className="mb-12 text-lg text-muted-foreground">
                {t("description")}
              </p>
              <Link
                href="/"
                className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-all hover:scale-105 font-medium cursor-pointer"
              >
                {t("buttonText")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
