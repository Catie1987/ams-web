"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import Title from '@/components/shared/Title';
import { MapPinned, FileText, Mail, Phone, Clock8 } from 'lucide-react';
import AnimatedLine from '@/components/features/AnimatedLine';
import { motion, Variants } from 'framer-motion';
import AnimatedTitle from '@/components/features/AnimatedTitle';

const itemscontainer: Variants = {
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
};
const itemvariant: Variants = { 
    show: { opacity: 1, y: 0 }, 
    hidden: { opacity: 0, y: 20 }, };

const departments = [
    {
        title: 'electronic',
        number: '+84 912 378642'
    },
    {
        title: 'plastic',
        number: '+84 943 121182'
    },
    {
        title: 'silicone',
        number: '+84 399 532696'
    },
    {
        title: 'tools',
        number: '+84 344 609996'
    },
    {
        title: 'special',
        number: '+84 943 121182'
    }
]


export default function ContactDetail() {
    const t = useTranslations("ContactPage");
    const addresslist = [
        {
            Icon: MapPinned, 
            size: 24, 
            text: t('address'),
        },
        { 
            Icon: FileText, 
            size: 20, 
            text: <><span className="font-bold mr-2">{t('tax')}</span>0108405379</>, 
        },
        { 
            Icon: Mail, 
            size: 20, 
            text: <><span className="font-bold mr-2">Email:</span><a className="hover:underline underline-offset-2" href="mailto:info@amsvn.net">info@amsvn.net</a></>, 
        },
        { 
            Icon: Phone, 
            size: 20, 
            text: <><span className="font-bold mr-2">{t('phone')}</span>+84 24 6329 5652</>,
        },
        { 
            Icon: Clock8, 
            size: 20, 
            text: <><span className="font-bold mr-2">{t('time')}</span>{t('working')}</>, 
        },
    ]
  return (
    <div className='w-full'>
        <Title className='relative md:text-2xl text-xl mb-10'>
            <div className='relative w-fit'>{t('department')}
            <AnimatedTitle/>
            </div>
            <AnimatedLine height={'4px'} width={'80px'}/>
        </Title>
        <motion.ul 
        variants={itemscontainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className='w-full flex flex-col gap-4'>
            {departments.map((department, idx) => (
                <motion.li className='flex flex-wrap w-full items-center justify-between max-w-[450px]' key={idx} variants={itemvariant}>
                    <p className='pr-4 text-black/60'>{t(department.title)}</p>
                    <a href="tel:+84912378642"><span className='font-bold text-sm hover:underline underline-offset-2'>{department.number}</span></a>
                </motion.li>
            ))}
            

        </motion.ul>
        <Title className='relative md:text-2xl text-xl my-10'>
            <div className='relative w-fit'>
                {t('location')}
                <AnimatedTitle/>
            </div>
            <AnimatedLine height={'4px'} width={'80px'}/>
        </Title>
        <motion.ul
        variants={itemscontainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className='w-full flex flex-col gap-4'>
            <li className='flex flex-wrap w-fit items-center justify-between max-w-[450px] relative'>
                <p className='font-bold text-base md:text-lg'>{t('name')}</p>
                <AnimatedTitle/>
            </li>
            {addresslist.map((address, idx) => (
                <motion.li key={idx} variants={itemvariant} className='flex w-full items-center gap-4 max-w-[450px]'>
                    <address.Icon size={address.size} className='text-[--cta2]' />
                    <p className='w-fit text-sm text-black/80'>{address.text}</p>
                </motion.li>
            ))}
        </motion.ul>
    </div>
  )
}
