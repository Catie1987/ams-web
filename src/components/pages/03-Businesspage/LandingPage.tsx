"use client"
import AnimatedLine from '@/components/features/AnimatedLine'
import AnimatedTitle from '@/components/features/AnimatedTitle'
import Title from '@/components/shared/Title'
import { useTranslations } from 'next-intl';
import {motion} from 'framer-motion'
import React from 'react';
import Image from 'next/image';

import pic1 from "../../../../public/assets/image/Business/listImageBox-pc-4.jpg"
import ArrowDown from '@/components/features/Arrow-Down';


export default function LandingPage() {
    const t = useTranslations('BusinessPage');
  return (
    <div className='w-full'>
        <Title className='relative mb-10'>
            <div className='relative w-fit py-1'>{t('intro')}
                <AnimatedTitle/>
            </div>
            <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
        <p className='mb-4'>{t('subintro')}</p>
        <div className='w-full flex flex-wrap gap-4 mb-10'>
            <button className='md:w-[340px] w-full border px-8 rounded-md py-4 overflow-hidden relative group bg-white hover:border-transparent hover:transition-all hover:duration-150 '>
                <a href='#service' className='w-full h-full flex items-center bg-white z-10'>
                <div className='absolute h-full w-full border-[--cta2] rounded-md border-2 scale-90 group-hover:scale-100 inset-0 opacity-0 group-hover:transition-all group-hover:duration-150 delay-150 group-hover:opacity-100'></div>
                <span className='mr-4 group-hover:text-[--cta2] transition-colors duration-300'>{t('button1')}</span>
                <ArrowDown/>
                </a>
            </button>
            <button className='md:w-[340px] w-full border px-8 rounded-md py-4 overflow-hidden relative group bg-white hover:border-transparent hover:transition-all hover:duration-150 '>
                <a href='#field' className='w-full h-full flex items-center bg-white z-10'>
                <div className='absolute h-full w-full border-[--cta2] rounded-md border-2 scale-90 group-hover:scale-100 inset-0 opacity-0 group-hover:transition-all group-hover:duration-150 delay-150 group-hover:opacity-100'></div>
                <span className='mr-4 group-hover:text-[--cta2] transition-colors duration-300'>{t('button2')}</span>
                <ArrowDown/>
                </a>
            </button>
        </div>
        <Title className='text-[--cta2] text-xl md:text-2xl'>{t('title1')}</Title>
        <div className='w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-8'>
            <div className='h-full w-full relative md:absolute border rounded-lg overflow-hidden'>
                <Image alt="" src={pic1} priority width={1280} height={800} className='object-cover w-full h-full'/>
            </div>
            <motion.div className='flex flex-col gap-8 py-4 z-10 md:text-white md:font-light col-span-1'>
                <p className='md:px-4'>{t('line1')}</p>
                <p className='md:px-4'>{t('line2')}</p>
            </motion.div>
            
        </div>
    </div>
  )
}
