"use client";

import { motion } from "motion/react";
import { PacmanLoader } from "react-spinners";

interface LoaderProps {
  isVisible: boolean;
}

const Loader = ({ isVisible }: LoaderProps) => {
  if (!isVisible) return null;

  return (
    <motion.div className="loader-overlay" initial="initial" animate="animate">
      <div className="loader-wrapper">
        <div className="loader-spinner">
          <PacmanLoader color="#14b8a6" />
        </div>
      </div>
    </motion.div>
  );
};

export { Loader };
