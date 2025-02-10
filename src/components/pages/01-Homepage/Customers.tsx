"use client";
import Title from '@/components/shared/Title';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import img1 from '../../../../public/assets/home/cus1.png';
import img2 from '../../../../public/assets/home/cus2.png';
import img3 from '../../../../public/assets/home/cus3.png';
import img4 from '../../../../public/assets/home/cus4.png';
import img5 from '../../../../public/assets/home/cus5.png';
import img6 from '../../../../public/assets/home/cus6.png';
import img7 from '../../../../public/assets/home/cus7.jpg';
import img8 from '../../../../public/assets/home/cus8.jpg';
import img9 from '../../../../public/assets/home/cus9.png';
import img10 from '../../../../public/assets/home/cus10.png';
import img11 from '../../../../public/assets/home/cus11.png';
import CustomerCard from './Customer-Card';
import useMeasure from 'react-use-measure'


export default function Customers() {
    const t = useTranslations('HomePage.FourthPra');
    const images = [
        { img: img1, title: "BOYD Corporation" },
        { img: img2, title: "Canon Vietnam Co., Ltd." },
        { img: img3, title: "Brother Industries" },
        { img: img4, title: "Mitsubishi Electronic" },
        { img: img5, title: "Asti Electronic" },
        { img: img6, title: "Jabil Inc" },
        { img: img7, title: "KIMSEN Industrial" },
        { img: img8, title: "Dainese Vietnam Co., Ltd." },
        { img: img9, title: "UMC Electronic" },
        { img: img10, title: "Keyence Corporation" },
        { img: img11, title: "VinFast LLC" }
    ];
    const loopedImages = [...images, ...images]
    const FAST_DURATION = 25;
    const SLOW_DURATION = 75;
    const [duration, setDuration] = useState(FAST_DURATION);
    let [ref, {width}] = useMeasure();
    const xTranslation = useMotionValue(0);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);
    useEffect(()=> {
        let controls;
        let finalPosition = -width/2-8;
        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
              ease: "linear",
              duration: duration * (1 - xTranslation.get() / finalPosition),
              onComplete: () => {
                setMustFinish(false);
                setRerender(!rerender);
              },
            });
          } else {
            controls = animate(xTranslation, [0, finalPosition], {
              ease: "linear",
              duration: duration,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0,
            });
          }
      
          return controls?.stop;
        }, [rerender, xTranslation, duration, width]);
    
  return (
    <div className='w-full mt-20 relative min-h-[300px] overflow-hidden'>
        
        <div className='w-fit relative overflow-hidden'>
            <Title className='mr-2 text-3xl md:text-4xl lg:text-5xl text-gray-900 py-2'>{t('customer')}</Title>
            <div className='mt-1 md:mt-2 h-2 w-full md:w-1/2 bg-[--cta2] [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]'></div>
            <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: '100%' }}
            viewport={{once: false }}
            transition={{
                duration: 1,
                stiffness: 0.5
            }}
            className='absolute w-full h-full bg-white top-0 left-0'></motion.div>
        </div>
        <motion.div className='absolute left-0 flex gap-4 mt-10' ref={ref} style={{x: xTranslation}}
        onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}>
            {loopedImages.map((item, idx) => (
                <CustomerCard key={idx} image={item.img} text={item.title} />
            ))}
        </motion.div>
        <div className='absolute left-0 bottom-0 h-[200px] w-20 bg-gradient-to-r from-white to-transparent'></div>
        <div className='absolute right-0 bottom-0 h-[200px] w-20 bg-gradient-to-l from-white to-transparent'></div>
    </div>
  )
}
