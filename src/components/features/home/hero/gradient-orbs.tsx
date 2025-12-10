import { getFixedAnimationDelay } from "@/lib/utils";

/**
 * Gradient orbs background component
 * Creates animated floating gradient orbs for visual effect
 * Used in the Hero component
 */
export function GradientOrbs(): React.ReactElement {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-primary/20 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div
        className="absolute top-1/3 -left-20 w-72 h-72 bg-brand-secondary/20 rounded-full filter blur-3xl opacity-30 animate-float"
        style={getFixedAnimationDelay(2)}
      ></div>
      <div
        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-brand-primary/20 rounded-full filter blur-3xl opacity-30 animate-float"
        style={getFixedAnimationDelay(4)}
      ></div>
    </div>
  );
}
