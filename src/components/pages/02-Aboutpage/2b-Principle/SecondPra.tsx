"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import Title from '../../../../components/shared/Title';

export default function SecondPra() {
    const t = useTranslations('PrinciplePage');
    const principledata = [
        {
            title: t('prinheader1'),
            content: t('prindetail1')
        },
        {
            title: t('prinheader2'),
            content: t('prindetail2')
        },
        {
            title: t('prinheader3'),
            content: t('prindetail3')
        },
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
    <div className='w-full mt-20'>
        <motion.ul
        variants={itemscontainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className='grid grid-cols-1 md:grid-cols-3 gap-8 text-white'
        >
            {principledata.map((principle, idx) => (
                <motion.li key={idx}
                variants={itemvariant}
                className="min-h-fit md:min-h-64 rounded-xl p-6 shadow-lg bg-gradient-to-br from-[--cta2] to-[--cta3]"
                >
                    <Title className='relative'>{principle.title}
                        <div className='absolute bg-white h-1 w-14 left-0 translate-y-2'></div>
                    </Title>
                    <p className='mt-10'>{principle.content}</p>
                </motion.li>
            ))}
        </motion.ul>
    </div>
  )
}
