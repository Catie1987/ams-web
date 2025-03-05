"use client";
import React, { FC } from 'react';
import { MakerDetail } from '../../../../lib/types';
import MakerImage from '../../../../components/features/MakerImage';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";
import Link from 'next/link';
import { motion } from 'framer-motion'

interface MakerProps {
    makerDetail: MakerDetail;
    locale: string;
    index: number;
  }

const MarkerName:FC<MakerProps> = ({makerDetail, locale, index}) => {
    const {makerName, logo, slug} = makerDetail;
    const getPath = (locale: string, slug: string) => {
      if (locale === 'en') {
        return `/en/product/maker/${slug}`;
      } else if (locale === 'vn') {
        return `/vn/san-pham/thuong-hieu/${slug}`;
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
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className='w-full h-32 flex justify-center items-end p-4'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className='w-full h-full overflow-hidden relative'>
            <Link href={getPath(locale, slug)}>
              {logo?.url && 
              <MakerImage alt={makerName} src={logo.url}/>
              } 
              </Link>
          </TooltipTrigger>
          <TooltipContent className='md:block hidden'>
            <p className=''>{makerName}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.li>
  )
}

export default MarkerName
