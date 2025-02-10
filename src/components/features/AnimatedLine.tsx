"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface AnimatedLineProps {
  height: string; // Accept height as a prop
  width: string;  // Accept width as a prop
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({ height, width }) => {
  const [isInView, setIsInView] = React.useState(false);
  return (
    <motion.div
      className="absolute bg-[--cta2] translate-y-1"
      style={{ height }} // Set the height dynamically
      initial={{ width: "0px" }}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      animate={isInView? { width }: {width: "0px"}} 
      transition={isInView? {duration: 1, delay: 0.5}: {duration: 0}}
      viewport={{ once: false }}
    />
  );
};

export default AnimatedLine;
