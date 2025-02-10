"use client";
import React from 'react';
import Title from '@/components/shared/Title';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import ArrowRight from '@/components/features/Arrow-Right-cta';
import Image from 'next/image';
import img1 from '../../../../public/assets/home/pic1.webp';
import img2 from '../../../../public/assets/home/pic2.jpg';
import img3 from '../../../../public/assets/home/pic3.png';
import img4 from '../../../../public/assets/home/pic4.png';
import img5 from '../../../../public/assets/home/pic5.webp';
import img6 from '../../../../public/assets/home/pic6.avif';
import img7 from '../../../../public/assets/home/pic7.webp';
import img8 from '../../../../public/assets/home/pic8.webp';
import { HousePlug, Leaf, Recycle } from 'lucide-react';
import Link from 'next/link';

export default function SecondPra() {
    const t = useTranslations('HomePage.SecondPra');
    const items = [
        {
            title: t('business1'),
            imglink: img1,
            link: t('link1')
        },
        {
            title: t('business2'),
            imglink: img2,
            link: t('link2')
        },
        {
            title: t('business3'),
            imglink: img3,
            link: t('link3')
        },
        {
            title: t('business4'),
            imglink: img4,
            link: t('link4')
        },
        {
            title: t('business5'),
            imglink: img5,
            link: t('link5')
        },
        {
            title: t('business6'),
            imglink: img6,
            link: t('link6')
        },
        {
            title: t('business7'),
            imglink: img7,
            link: t('link8')
        },
        {
            title: t('business8'),
            imglink: img8,
            link: t('link8')
        },
    ];
  return (
    <div className='w-full min-h-screen relative'>
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
        <div className='w-full md:w-1/2 mt-10 py-2'>
            <p className='text-3xl font-semibold'>{t('title')}</p>
            <p className='mt-4'>{t('content')}</p>
            <button className='mt-6 md:w-[340px] w-full border px-8 rounded-md py-6 overflow-hidden relative group bg-[--cta2] hover:bg-white hover:border-transparent hover:transition-all hover:duration-150 '>
                <a href={t('link')} className='w-full h-full flex items-center z-10 text-white'>
                <div className='absolute h-full w-full border-[--cta2] rounded-md border-2 scale-90 group-hover:scale-100 inset-0 opacity-0 group-hover:transition-all group-hover:duration-150 delay-150 group-hover:opacity-100'></div>
                <span className='mr-4 group-hover:text-[--cta2] transition-colors duration-300'>{t('button')}</span>
                <ArrowRight/>
                </a>
            </button>
        </div>
        <div className='mt-10 ml-0 md:ml-10 w-full md:w-1/2 border rounded-lg shadow-lg mb-10 p-4 flex flex-col justify-center'>
            <p className='text-2xl font-semibold w-full pr-10'>{t('sustain')}</p>
            <div className='mt-1 relative w-full md:w-[90%] h-1 bg-gray-100'>
                <div className='absolute left-0 top-0 h-1 w-10 bg-[--cta2]'></div>
            </div>
            <p className='mt-4 w-full md:w-[90%]'>{t('sustain1')}</p>
            <div className='mt-4 flex w-full md:w-[90%] justify-evenly mb-4'>
                    <div className='border-2 border-dotted border-[--cta2] rounded-full p-4 h-20 w-20'>
                        <Leaf className='text-[--cta2] h-full w-full'/>
                    </div>
                    <div className='border-2 border-dotted border-[--cta2] rounded-full p-4 h-20 w-20'>
                        <Recycle className='text-[--cta2] h-full w-full'/>
                    </div>
                    <div className='border-2 border-dotted border-[--cta2] rounded-full p-4 h-20 w-20'>
                        <HousePlug className='text-[--cta2] h-full w-full'/>
                    </div>
            </div>
        </div>
        <div className='relative md:absolute w-full md:w-1/2 top-0 h-auto right-0 border rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 shadow-lg'>
            {items.map((item,idx) => (
                <Link key={idx} href={item.link} className='w-full h-24 lg:h-44 relative group overflow-hidden cursor-pointer'>
                    <Image
                    src={item.imglink}
                    alt="Background"
                    priority
                    width={400}
                    height={200}
                    className="z-0 object-cover w-full h-full select-none group-hover:scale-110 transition-transform duration-300"  // Make sure the image is behind the gradient
                    />
                    <div className="absolute inset-0 w-full bg-gradient-to-r from-[--gradient2] to-[--gradient1] z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full z-[11] p-4'>
                        <Title className='text-white'>{item.title}</Title>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}
