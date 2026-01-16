import React from "react";
import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "dark" | "darker";
}

/**
 * Standard section layout wrapper with consistent spacing and background
 * Provides uniform section structure across all pages
 *
 * @example
 * <SectionLayout id="about" background="darker">
 *   <div className="container mx-auto px-4">
 *     {content}
 *   </div>
 * </SectionLayout>
 */
const SectionLayout = ({
  children,
  id,
  className,
  background = "dark",
}: SectionLayoutProps): React.ReactElement => {
  const bgClasses = {
    dark: "bg-dark-bg",
    darker: "bg-dark-bg-alt",
  };

  return (
    <section
      id={id}
      className={cn("py-12 xl:py-24", bgClasses[background], className)}
    >
      {children}
    </section>
  );
};

export { SectionLayout };
