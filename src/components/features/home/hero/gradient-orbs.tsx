import * as motion from "motion/react-client";
import { float } from "@/lib/motion/variants";
import { getMotionFixedDelay } from "@/lib/motion/utils";

/**
 * Gradient orbs background component
 * Creates animated floating gradient orbs for visual effect
 * Used in the Hero component
 */
const GradientOrbs = (): React.ReactElement => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -top-20 -right-20 w-72 h-72 bg-brand-primary/20 rounded-full filter blur-3xl opacity-30"
      animate="animate"
      variants={float}
    ></motion.div>
    <motion.div
      className="absolute top-1/3 -left-20 w-72 h-72 bg-brand-secondary/20 rounded-full filter blur-3xl opacity-30"
      animate="animate"
      variants={float}
      transition={getMotionFixedDelay(2)}
    ></motion.div>
    <motion.div
      className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-brand-primary/20 rounded-full filter blur-3xl opacity-30"
      animate="animate"
      variants={float}
      transition={getMotionFixedDelay(4)}
    ></motion.div>
  </div>
);

export { GradientOrbs };
