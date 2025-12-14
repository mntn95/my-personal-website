import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { MotionConfig } from "motion/react";
import { Navigation } from "@/components/layouts/navigation";
import { Footer } from "@/components/layouts/footer";
import { ParticleBackground } from "@/components/common/particle-background";
import { BackToTop } from "@/components/common/back-to-top";
import PageLoader from "@/components/common/page-loader";
import { motionConfig } from "@/lib/motion/config";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("HomePage.metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    authors: [{ name: "Mathieu Nguyen" }],
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      type: "website",
      locale: locale,
    },
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        fr: "/",
      },
    },
  };
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.ReactElement> => {
  const locale = await getLocale();

  return (
    <html lang={locale} className={inter.className}>
      <body className="antialiased" suppressHydrationWarning>
        <NextIntlClientProvider>
          <MotionConfig {...motionConfig}>
            <PageLoader>
              <div className="flex flex-col min-h-screen bg-dark-bg text-white relative">
                <ParticleBackground />

                <Navigation />

                <main className="flex-grow relative z-10">{children}</main>

                <Footer />
                <BackToTop />
              </div>
            </PageLoader>
          </MotionConfig>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
