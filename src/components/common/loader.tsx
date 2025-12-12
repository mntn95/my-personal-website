"use client";

import { motion } from "motion/react";
import { loaderFadeIn, loaderSpin } from "@/lib/motion/variants";
import { getMotionFixedDelay } from "@/lib/motion/utils";

interface LoaderProps {
  isVisible: boolean;
}

const Loader = ({ isVisible }: LoaderProps) => {
  if (!isVisible) return null;

  const barRotations = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  const barDelays = [
    -1.2, -1.1, -1.0, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1,
  ];

  return (
    <motion.div
      className="loader-overlay"
      initial="initial"
      animate="animate"
      variants={loaderFadeIn}
    >
      <div className="loader-wrapper">
        <div className="loader-spinner">
          {barRotations.map((rotation, index) => (
            <motion.div
              key={index}
              className="loader-bar"
              style={{
                transform: `rotate(${rotation}deg) translate(146%)`,
              }}
              animate="animate"
              variants={loaderSpin}
              transition={getMotionFixedDelay(barDelays[index])}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export { Loader };
