"use client";

import { FloatingIcons } from "@/components/common/floating-icons";
import { GradientOrbs } from "./gradient-orbs";
import { HeroContent } from "./hero-content";
import { SkillsGrid } from "./skills-grid";
import { ScrollIndicator } from "./scroll-indicator";

/**
 * Hero section component
 * Main landing section with introduction, typing animation, and skills grid
 * Used in the homepage
 */
export function Hero(): React.ReactElement {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <FloatingIcons />
      <GradientOrbs />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <SkillsGrid />
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
