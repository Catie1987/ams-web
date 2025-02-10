'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function AnimatedTitle() {
  const [hasViewed, setHasViewed] = useState(false);

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={hasViewed ? { x: '100%', width: "0px" } : { x: 0, width: "100%" }}
      onViewportEnter={() => setHasViewed(true)}
      transition={{ duration: 1, delay: 0.5 }}
      className='absolute w-full h-full bg-white right-0 top-0'
    />
  );
}
