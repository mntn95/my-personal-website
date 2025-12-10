import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/layouts/navigation";
import { Footer } from "@/components/layouts/footer";
import { ParticleBackground } from "@/components/common/particle-background";
import { BackToTop } from "@/components/common/back-to-top";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased" suppressHydrationWarning>
        <div className="flex flex-col min-h-screen bg-dark-bg text-white relative">
          <ParticleBackground />

          <Navigation />

          <main className="flex-grow relative z-10">{children}</main>

          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
