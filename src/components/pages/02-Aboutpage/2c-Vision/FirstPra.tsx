"use client"
import AnimatedLine from '../../../../components/features/AnimatedLine';
import AnimatedTitle from '../../../../components/features/AnimatedTitle';
import Title from '../../../../components/shared/Title';
import { useTranslations } from 'next-intl';
import React from 'react'
import { Variants, motion } from 'framer-motion';

export default function FirstPra() {
  const t = useTranslations('VisionPage');
  const visionitems = [
    {
      text: t("text1")
    },
    {
      text: t("text2")
    },
    {
      text: t("text3")
    },
    {
      text: t("text4")
    }
  ];
  const itemscontainer: Variants = {
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
};
const itemvariant: Variants = { 
    show: { opacity: 1, y: 0 }, 
    hidden: { opacity: 0, y: 20 }, };
  return (
    <div className='w-full mt-10'>
      <Title className='relative mb-10'>
                <div className='relative w-fit py-1'>{t('intro')}
                <AnimatedTitle/>
                </div>
                <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
      <div className='w-full'>
        <p className='my-4'>{t('line1')}</p>
      </div>
      <motion.ul
      variants={itemscontainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }} 
      className='w-full mt-10 gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {visionitems.map((item, idx)=>(
        <div key={idx} className='w-full flex items-center justify-center'>
          <motion.li variants={itemvariant}
          className='w-full max-w-80 aspect-square bg-gradient-to-b from-[#9fcbf1] to-[#dfedfa] rounded-full place-content-center place-items-center'>
            <p className='w-[15ch] text-pretty text-center text-[#2F509F] font-semibold text-base md:text-lg'>{item.text}</p>
          </motion.li>
        </div>
      ))}
      </motion.ul>
    </div>
  )
}
