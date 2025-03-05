"use client";
import AnimatedLine from '../../../components/features/AnimatedLine';
import AnimatedTitle from '../../../components/features/AnimatedTitle';
import ArrowRight from '../../../components/features/Arrow-Right';
import BusinessIcons from '../../../components/features/IconSVG';
import Title from '../../../components/shared/Title';
import { Link } from '../../../i18n/routing';
import { useTranslations } from 'next-intl';
import {motion, Variants} from 'framer-motion';
import React from 'react'

export default function Service() {
    const t = useTranslations('BusinessPage');
    const businessList = [
      {
        title: t('business1'),
        description: t('businessdes1'),
        icon: "#illust_car",
        link: "/business/automotive"
      },
      {
        title: t('business2'),
        description: t('businessdes2'),
        icon: "#illust_speaker",
        link: "/business/speaker"
      },
      {
        title: t('business3'),
        description: t('businessdes3'),
        icon: "#illust_camera",
        link: "/business/camera"
      },
      {
        title: t('business4'),
        description: t('businessdes4'),
        icon: "#illust_transformer",
        link: "/business/semiconductor"
      },
      {
        title: t('business5'),
        description: t('businessdes5'),
        icon: "#illust_electronic",
        link: "/business/electronic"
      },
      {
        title: t('business6'),
        description: t('businessdes6'),
        icon: "#illust_medical",
        link: "/business/medical"
      },
      {
        title: t('business7'),
        description: t('businessdes7'),
        icon: "#illust_energy",
        link: "/business/battery"
      },
      {
        title: t('business8'),
        description: t('businessdes8'),
        icon: "#illust_construction",
        link: "/business/construction"
      },
    ];
    const itemscontainer: Variants = {
      show: {
        transition: {
          staggerChildren: 0.04,
          delayChildren: 0.04,
        },
      },
    };
    const itemvariant: Variants = ({ 
          show: { opacity: 1, scale: 1}, 
          hidden: { opacity: 0, scale: 0.5 }, 
          });
  return (
    <div className='w-full pt-14' id="field">
      <BusinessIcons />
        <Title className='relative mb-10'>
            <div className='relative w-fit py-1'>{t('button2')}
                <AnimatedTitle/>
            </div>
            <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
        <div className='w-full h-full'>
          <p className='text-[--cta2] md:text-2xl text-xl font-bold'>{t('businessfield')}</p>
          <p className='text-sm md:text-base mt-4'>{t.rich('businessintro', {
            span: (chunks) => (
              <span className="font-bold">{chunks}</span>
            )
          })}</p>
          <motion.ul 
          variants={itemscontainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }} 
          className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10'>
          {businessList.map((business: {
            title: string; 
            description: string;
            icon: string | undefined; 
            link: any;
          }, 
          idx: number) => (
            <motion.li key={idx} 
            variants={itemvariant}
            className={`w-full border-b border-l flex flex-col justify-between group bg-white hover:bg-[--cta2] cursor-pointer transition-all duration-300
              ${idx < 4 ? 'lg:border-t': ''}
              ${idx < 3 ? 'md:border-t': ''}
              ${idx < 2 ? 'border-t': ''}
              ${idx % 4 === 3 ? 'lg:border-r': ''}
              ${idx % 3 === 2 ? 'md:border-r lg:border-r-0': ''}
              ${idx === 7 ? 'md:border-r': ''}
              ${idx % 2 === 1 ? 'max-md:border-r': ''}
            `}>
              <Link className='w-full h-full p-4' href={business.link}>
                <div className='flex items-center justify-between w-full mb-4 gap-4 max-sm:flex-col'>
                  <svg className='w-8 h-8 min-w-8 fill-[--cta2] group-hover:fill-white group-focus:fill-white transition-colors duration-300'> <use href={business.icon} xlinkHref={business.icon}></use> </svg>
                  <Title className='text-lg md:text-xl font-bold text-black/80 text-end group-hover:text-white group-focus:text-white transition-colors duration-300'>{business.title}</Title>
                </div>
                <p className='text-sm md:text-base line-clamp-3 text-black/60 group-hover:text-white/60 group-focus:text-white/60 transition-colors duration-300'>{business.description}</p>
                <div className='mt-4 text-[--cta2] flex relative items-center'>
                  <p className='text-sm font-semibold group-hover:text-white group-focus:text-white transition-colors duration-300'>{t('readmore')}</p>
                  <ArrowRight/>
                </div>
              </Link>
            </motion.li>
          ))}
          </motion.ul>
        </div>
    </div>
  )
}
