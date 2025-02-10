"use client";
import Title from '@/components/shared/Title';
import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import partner from '../../../../public/assets/home/partner.jpg';
import shinetsu from '../../../../public/assets/home/shinetsu.png';
import ad1 from '../../../../public/assets/home/ad1.jpg';
import ad2 from '../../../../public/assets/home/ad2.jpg';
import ad3 from '../../../../public/assets/home/ad3.jpg';
import ad4 from '../../../../public/assets/home/ad4.webp';
import Link from 'next/link';
import ArrowRight from '@/components/features/Arrow-Right-cta2';

export default function ThirdPra() {
    const t = useTranslations('HomePage.ThirdPra');
    const items = [
        {
            title: t('ad1'),
            img: ad1,
            link: t('link1')
        },
        {
            title: t('ad2'),
            img: ad2,
            link: t('link2')
        },
        {
            title: t('ad3'),
            img: ad3,
            link: t('link3')
        },
        {
            title: t('ad4'),
            img: ad4,
            link: t('link4')
        }
    ];
    const itemscontainer: Variants = {
        show: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 1,
          },
        },
    };
    const itemvariant: Variants = ({ 
        show: { opacity: 1, x: 0, 
            transition: {
                duration: 0.5,
            } 
        }, 
        hidden: { 
        opacity: 0, 
          x: 100 }, 
    });
    const itemhorizon: Variants = ({ 
        show: { opacity: 1, y: 0, 
            transition: {
            duration: 0.5,
            } 
        }, 
        hidden: { 
        opacity: 0, 
        y: 100 }, 
    });

  return (
    <div className='w-full min-h-screen overflow-hidden mt-10'>
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
        <div className='w-full bg-[#F1F7FD] pb-10 grid grid-cols-1 md:grid-cols-2 mt-20 md:pr-4'>
            <motion.div 
                initial={{ y: 200, opacity: 0  }}
                whileInView={{ y: -50, opacity: 1}}
                viewport={{ once: false }} 
                transition={{ duration: 1, delay: 0.5 }}
                className='w-full md:w-auto h-auto rounded-lg overflow-hidden md:ml-10 px-10 md:pb-10'>
                <Image alt="" src={partner} width={600} height={400} priority className='md:w-auto rounded-lg object-cover w-full z-10 md:shadow-[0_20px_25px_-15px_rgba(0,0,0,0.6)]'/>
            </motion.div>
            <motion.div
            variants={itemscontainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}  
            className='w-full h-full basis-1/2'>
                <motion.div variants={itemvariant} className='w-full hidden md:flex flex-wrap mt-10'>
                    <p className='text-3xl font-semibold basis-2/3'>{t('shinetsu')}</p>
                    <Image alt='Shinetsu' src={shinetsu} width={160} height={80} priority className='w-40 object-cover h-20 basis-1/3' />
                </motion.div>
                <motion.p variants={itemvariant} className='mt-4'>
                    <span className='md:block hidden'>{t('content1')}</span>
                    <span className='md:block hidden mx-1 font-bold'>{t('content2')}</span>
                    <span className='lg:block hidden'>{t('content3')}</span>
                </motion.p>
            </motion.div>
            <div className='w-full col-span-2 pl-4 pr-4 md:pr-0 md:pl-20 mt-4'>
                <div className='w-full md:hidden flex flex-wrap mt-10 mb-4'>
                    <p className='text-3xl font-semibold basis-2/3'>{t('shinetsu')}</p>
                    <Image alt='Shinetsu' src={shinetsu} width={160} height={80} priority className='w-40 object-cover h-20 basis-1/3' />
                </div>
                <p>
                    <span className='md:hidden block'>{t('content1')}</span>
                    <span className='md:hidden block font-bold'>{t('content2')}</span>
                    <span className='lg:hidden block'>{t('content3')}</span>
                </p>
            </div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 items-center mt-20'>
            <motion.p
            initial={{opacity:0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
                duration: 0.5
            }}
            viewport={{ once: false}} 
            className='text-2xl font-bold'>{t('vision')}</motion.p>
            <motion.p
            initial={{opacity:0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{
                duration: 0.5
            }}
            viewport={{ once: false}} 
            >{t('vision1')}</motion.p>
        </div>
        <motion.ul
        variants={itemscontainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}  
        className='w-full grid grid-cols-2 md:grid-cols-4 gap-x-5 sm:gap-x-10 gap-y-10 mt-10'
        >
            {items.map((item, idx)=> (
                <motion.li
                variants={itemhorizon} 
                key={idx} className='group'>
                    <Link href={item.link} className='flex flex-col'>
                        <div className='w-full aspect-square overflow-hidden rounded-lg'>
                          <Image alt={item.title} src={item.img} width={500} height={500} className='object-cover h-full w-full group-hover:scale-110 transition-transform duration-300'/>  
                        </div>
                        <div className='mt-4 w-full flex items-center relative'>
                            <p className='font-bold group-hover:text-[--cta2] transition-colors duration-300 capitalize w-[calc(100%-40px)]'>{item.title}</p>
                            <ArrowRight/>
                        </div>
                    </Link>
                </motion.li>
            ))}
            
        </motion.ul>
    </div>
  )
}
