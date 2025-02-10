"use client";
import { useAnimationControls, useScroll, Variants, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface ScrollToTopButtonProps {
  footerRef: any;
}

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export default function ScrollToTopButton({footerRef}: ScrollToTopButtonProps) {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const isBrowser = () => typeof window !== 'undefined';
  
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {

    const handleScrollChange = (latestValue: number) => {
      if (latestValue > 0) {
          controls.start('show');
      } else {
          controls.start('hide');
      }
    };

    const intersectionObserverCallback = (entries: any[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(intersectionObserverCallback, { threshold: 0.07 });
    if (footerRef.current) {
      intersectionObserver.observe(footerRef.current);
    }

    const unsubscribe = scrollYProgress.on('change', handleScrollChange);
    return () => {
      unsubscribe();
      intersectionObserver.disconnect();
    };
  }, [controls, scrollYProgress, footerRef]);

  return (
    <motion.div 
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      className={`fixed right-2 md:right-4 lg:right-8 bottom-12 `}>
      <button onClick={scrollToTop} className="flex items-center gap-2 group">
        <div className={`bg-[--cta2] group-hover:bg-white group-hover:delay-200 duration-100 rounded-full shadow-md h-8 w-8 border flex justify-center items-center relative`}>
          <span className='absolute text-white opacity-100 group-hover:-translate-y-2 group-hover:opacity-0 translate-y-0 group-hover:transition-all group-hover:duration-300'>↑</span>
          <span className='absolute font-bold text-[--cta2] group-hover:delay-200 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300'>↑</span>
        </div>
        <span className={`md:block hidden ${isFooterVisible? 'text-white' : 'text-black group-hover:text-[--cta2]'}`}>Back to Top</span>
      </button>
    </motion.div>
  );
};
