"use client";
import AnimatedLine from '@/components/features/AnimatedLine';
import AnimatedTitle from '@/components/features/AnimatedTitle';
import Title from '@/components/shared/Title';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function SecondPra() {
  const isMobile = useIsMobile();
    const t = useTranslations('OverviewPage');
    const infos = [
        {
            year: 2018,
            title: t('year1'),
            des: t('year1des')
        },
        {
          year: 2019,
          title: t('year2'),
          des: t('year2des'),
        },
        {
          year: 2019,
          title: t('year3'),
          des: t('year3des'),
        },
        {
          year: 2020,
          title: t('year4'),
          des: t('year4des'),
        },
        {
          year: 2021,
          title: t('year5'),
          des: t('year5des'),
        },
        {
          year: 2022,
          title: t('year6'),
          des: t('year6des'),
        },
        {
          year: 2022,
          title: t('year7'),
          des: t('year7des'),
        },
        {
          year: 2024,
          title: t('year8'),
          des: t('year8des'),
        },
    ];
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,  // Add this to delay child animations
          when: "beforeChildren"  // Ensure parent animates before children
        }
      }
    };
    const variants = {
      hidden: (i: number) => ({
        opacity: 0,
        x: isMobile ? '-50%' :  (i % 2 === 0 ? '-50%' : '50%'),
      }),
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.1,
          type: "spring",
          stiffness: 100
        }
      })
    };
  
    const moveupvariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { stiffness: 100 }}
    };
    const dotvariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { stiffness: 100 }}
    };
  return (
    <div className='w-full mt-20 overflow-hidden'>
        <Title className='relative mb-10'>
                <div className='relative w-fit py-1'>{t('history')}
                <AnimatedTitle/>
                </div>
                <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
        <div className='w-full relative'>
          <div className='h-full w-0.5 absolute left-4 -translate-x-0 md:left-1/2 md:-translate-x-1/2 bg-gray-200'></div>
            <div className='w-full relative px-8 flex flex-col gap-8'>
            {infos.map((info, idx) => (
              <motion.div key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`pt-10 relative w-full px-0 md:w-1/2 md:px-4 ${idx % 2 === 1 ? 'md:translate-x-full' : ''}`}>
                <motion.div 
                variants={moveupvariants}
                className={`absolute w-full -top-1 text-[--cta] font-extrabold left-4
                ${idx % 2 === 1 ? 'md:text-start md:left-4' : 'md:text-right md:-left-4'}`}>
                  <Title>{info.year}</Title>
                  </motion.div>
                <motion.div variants={dotvariants}
                className={`absolute top-0 border rounded-full border-[--cta2] h-4 w-4 bg-[--cta2] -left-6 mt-2 ${idx % 2 === 1 ? 'md:translate-x-full' : 'md:left-full md:-translate-x-1/2'} `}></motion.div>
                <motion.div 
                custom={idx}
                variants={variants}
                className={`w-full border text-gray-900 border-gray-100 rounded-lg bg-gray-100 ml-4 p-6 
                md:ml-0
                ${idx % 2 === 1 ? '' : ''}
                `}>
                  <Title className='mb-5 md:text-2xl text-xl'>{info.title}</Title>
                  <p className=''>{info.des}</p>
                </motion.div>
              </motion.div>
            ))}
            </div>
        </div>
    </div>
  )
}
