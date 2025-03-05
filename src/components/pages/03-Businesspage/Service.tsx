"use client";
import AnimatedLine from '../../../components/features/AnimatedLine';
import AnimatedTitle from '../../../components/features/AnimatedTitle';
import img1 from '/public/assets/image/Business/listImageBox-mb-1.jpg';
import img2 from '/public/assets/image/Business/listImageBox-mb-2.jpg'
import img3 from '/public/assets/image/Business/listImageBox-mb-3.jpg'
import Title from '../../../components/shared/Title';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import {motion, Variants} from 'framer-motion';
import { useIsMobile } from '../../../lib/hooks/useIsMobile';

export default function Service() {
    const t = useTranslations('BusinessPage');
    const isMobile = useIsMobile();
    const ServiceList = [
      {
        number: "01/",
        imgurl: img1,
        title: t('servicetitle1'),
        description: t('servicedes1')
      },
      {
        number: "02/",
        imgurl: img2,
        title: t('servicetitle2'),
        description: t('servicedes2')
      },
      {
        number: "03/",
        imgurl: img3,
        title: t('servicetitle3'),
        description: t('servicedes3')
      },
    ];
    const itemscontainer: Variants = {
      show: {
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
  };
  const itemvariant = (idx: number): Variants => ({ 
      show: { opacity: 1, x: 0, transition: {duration: 0.5} }, 
      hidden: { opacity: 0, 
        x: idx % 2 === 1 ? -100 : 100 }, 
      });
  return (
    <div className='w-full min-h-screen pt-14' id="service">
        <Title className='relative mb-10'>
            <div className='relative w-fit py-1'>{t('service')}
                <AnimatedTitle/>
            </div>
            <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
        <div className='w-full'>
          <ul className='w-full flex flex-col gap-20'>
            {ServiceList.map((service, idx)=> (
              <li key={idx} className={`w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 items-center`}>
                <div className={`relative w-auto overflow-hidden flex justify-center ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <motion.div 
                  initial={{ y: 200, opacity: 0  }}
                  whileInView={{ y: 0, opacity: 1}}
                  viewport={{ once: true }} 
                  transition={{ duration: 1, delay: 0.5 }}
                  className='w-full md:w-auto h-auto rounded-lg'>
                    <Image alt={service.title} src={service.imgurl} width={375} height={330} priority className='md:w-auto object-cover rounded-lg w-full z-10 md:mb-20 md:shadow-[0_20px_25px_-15px_rgba(0,0,0,0.6)]'/>
                  </motion.div>
                  {isMobile ? 
                  <div className='absolute bg-[--cta2] h-10 w-10 bottom-0 left-0 z-10 border border-transparent rounded-bl-lg rounded-tr-lg'>
                    <span className='w-full h-full flex items-center justify-center text-white text-sm font-bold'>{service.number}</span>
                  </div> : 
                  <motion.div
                  initial={{ x: idx % 2 === 1 ? "100%" : "-100%"  }}
                  whileInView={{ x: 0}}
                  viewport={{ once: true }} 
                  transition={{ duration: 1 }}
                  className='absolute bg-[#F1F7FD] h-full w-full top-20 -z-10'></motion.div>}
                </div>
                <motion.div
                variants={itemscontainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }} 
                className={`w-full ${idx % 2 === 1 ? 'md:text-right' : ''}`}>
                  <motion.p variants={itemvariant(idx)} className='text-[--cta2] text-sm font-bold md:block hidden'>{service.number}</motion.p>
                  <motion.div variants={itemvariant(idx)}><Title className='text-[--cta2] my-2 md:my-4'>{service.title}</Title></motion.div>
                  <motion.p variants={itemvariant(idx)}>{service.description}</motion.p>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
};

