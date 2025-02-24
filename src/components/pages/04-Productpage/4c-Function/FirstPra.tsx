"use client";
import Title from '@/components/shared/Title';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';
import ArrowRight from '@/components/features/Arrow-Right-cta';


export default function FirstPra() {
    const t = useTranslations('FunctionPage');
  return (
    <div className='w-full relative'>
        <div className='w-fit relative overflow-hidden'>
            <Title className='mr-2 text-3xl md:text-4xl lg:text-5xl text-gray-900 py-2'>{t('intro')}</Title>
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
        <div className='w-full mt-10 flex flex-col md:flex-row gap-x-20 gap-y-10 justify-between items-center'>
            <p className='basis-2/3'>{t('content')}</p>
            <button className='basis-1/3 md:max-w-[340px] h-fit w-full border px-8 rounded-md py-6 overflow-hidden relative group bg-[--cta2] hover:bg-white hover:border-transparent hover:transition-all hover:duration-150 '>
                <a href={t('link')} className='w-full h-full flex items-center z-10 text-white'>
                <div className='absolute h-full w-full border-[--cta2] rounded-md border-2 scale-90 group-hover:scale-100 inset-0 opacity-0 group-hover:transition-all group-hover:duration-150 delay-150 group-hover:opacity-100'></div>
                <span className='mr-4 group-hover:text-[--cta2] transition-colors duration-300'>{t('button')}</span>
                <ArrowRight/>
                </a>
            </button>
        </div>
    </div>
  )
}
