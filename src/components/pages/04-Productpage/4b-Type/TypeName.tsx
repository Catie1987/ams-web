"use client"
import { TypeDetail } from '../../../../lib/types';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'

interface TypeProps {
    typeDetail: TypeDetail;
    locale: string;
    index: number;
  };


const TypeName:FC<TypeProps> = ({typeDetail, locale, index}) => {
    const {title, image, slug} = typeDetail;
    const getPath = (locale: string, slug: string) => {
        if (locale === 'en') {
          return `/en/product/type/${slug}`;
        } else if (locale === 'vn') {
          return `/vn/san-pham/the-loai/${slug}`;
        } else {
          return `/${slug}`; // Fallback for other locales
        }
      };
      const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
  return (
    <motion.li
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }} // Adjust delay and duration as needed
    variants={variants}
    className='w-full'>
        <Link href={getPath(locale, slug)} className='w-full flex flex-col gap-2 group'>
            <div className='w-full h-28 overflow-hidden border rounded-lg'>
                {image?.url && 
                <Image alt={title} src={image.url} width={200} height={150} className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-300'/>
                } 
            </div>   
            <p className='w-full text-start items-start group-hover:text-[--cta2] group-hover:underline-offset-2 group-hover:underline transition-colors duration-300'>{title}</p>
        </Link>
    </motion.li>
  )
}

export default TypeName