import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
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

export const metadata: Metadata = {
  title: "Mathieu Nguyen - Front-End Web Developer",
  description:
    "Freelance Front-End Web Developer with 7 years of experience creating high-performance, intuitive, and maintainable web interfaces using React, Next.js, and TypeScript.",
  keywords: [
    "Front-End Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Freelance",
    "Paris",
  ],
  authors: [{ name: "Mathieu Nguyen" }],
  openGraph: {
    title: "Mathieu Nguyen - Front-End Web Developer",
    description:
      "Freelance Front-End Web Developer specializing in React, Next.js, and modern web technologies",
    type: "website",
  },
};

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
