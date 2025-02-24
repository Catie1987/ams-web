"use client";
import { Icons } from '@/components/Icons';
import Title from '@/components/shared/Title';
import { TypeDetail } from '@/lib/types';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { FC } from 'react';
import RichTextRenderer from '../../05-Blogpage/RichTextRenderer';



interface TypeProps {
    typeDetail: TypeDetail;
  }

const FirstPra: FC<TypeProps> = ({ typeDetail }) => {
    const t = useTranslations('TypePage');
    const {title, subTitle} = typeDetail;
  return (
    <div className='w-full'>
        <Link href={t('backlink')} className='flex w-fit gap-2 border border-black/80 rounded-full py-2 px-6 mb-5 md:mb-0'>
            <div className='h-auto flex items-center fill-slate-500'><Icons.arrowLeftBlack/></div>
            <p className="text-center font-medium text-sm">{t('goback')}</p>
        </Link>
        <div className='w-fit relative overflow-hidden mt-6'>
            <Title className='mr-2 text-3xl md:text-4xl lg:text-5xl text-gray-900 py-2'>{title}</Title>
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
        <div className='w-full mt-10 max-w-4xl'>
            {subTitle && (
                <div suppressHydrationWarning className="relative w-full overflow-hidden">
                    <RichTextRenderer richTextContent={subTitle} />
                </div>
            )}
        </div>
    </div>
  )
}

export default FirstPra