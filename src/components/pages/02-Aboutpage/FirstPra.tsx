"use client";
import React from 'react';
import earth from '/public/assets/image/earth.png';
import { motion } from 'framer-motion'
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Title from '../../../components/shared/Title';

export default function FirstPra() {
    const t = useTranslations('AboutPage')
  return (
    <div className='w-full flex md:flex-row flex-col items-center gap-y-6 md:gap-x-8 overflow-x-hidden'>
        <motion.div 
          initial={{ opacity: 0, x:'-100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{once:true}}
          className='w-full flex justify-center'>
            <Image src={earth} alt='' priority width={400} height={400}/>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x:'100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{once:true}}
          className='w-full'>
            <Title className='text-black/50 font-bold text-lg md:text-xl lg:text-2xl md:leading-7 lg:leading-8'>
              {t.rich('line1', 
              {
                span: (chunks) => (
                    <span className="text-[--cta2] font-bold">{chunks}</span>
                ),
              },
              )}
            </Title>
        </motion.div>
    </div>
  )
}
