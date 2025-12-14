import * as motion from "motion/react-client";
import { scrollIndicator, scrollDot } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

/**
 * Scroll indicator component
 * Displays animated scroll indicator at the bottom of the hero section
 * Used in the Hero component
 */
const ScrollIndicator = ({
  className,
}: {
  className?: string;
}): React.ReactElement => (
  <div
    className={cn("absolute left-1/2 transform -translate-x-1/2", className)}
  >
    <motion.div
      className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
      animate="animate"
      variants={scrollIndicator}
    >
      <motion.div
        className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
        animate="animate"
        variants={scrollDot}
      ></motion.div>
    </motion.div>
  </div>
);

export { ScrollIndicator };
