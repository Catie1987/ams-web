"use client"
import React from 'react';
import Image from 'next/image';
import banner from '../../../../public/assets/image/bannerbusiness.jpg'
import Container from '@/components/layouts/Container';
import Title from '@/components/shared/Title';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

type PathMap = { [locale: string]: { [pathSegment: string]: string; }; };

export default function Banner() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const locale = useLocale();
  const pathMap: PathMap = { 
      en: { 
        business: 'business', 
        automotive: 'business1',
        speaker: 'business2',
        camera: 'business3',
        semiconductor: 'business4',
        electronic: 'business5',
        medical: 'business6',
        battery: 'business7',
        construction: 'business8',
      }, 
      vn: { 
        'nganh-nghe': 'business', 
        'xe-hoi': 'business1',
        'loa-tai-nghe': 'business2',
        'mo-dun-camera': 'business3',
        'chat-ban-dan': 'business4',
        'dien-tu': 'business5',
        'y-khoa': 'business6',
        'pin-nang-luong': 'business7',
        'xay-dung': 'business8',
      } 
    };

    
  const getTitle = () => {
  const segments = pathname.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  if (locale in pathMap && lastSegment in pathMap[locale]) {
    return t(pathMap[locale as keyof typeof pathMap][lastSegment]); 
  }
  return t('business');
;}
  return (
    <div className="relative h-[50vh] w-full flex items-center justify-center">
            <Image
              src={banner}
              alt="Background"
              priority
              quality={100}
              className="z-0 object-cover w-full h-full"  // Make sure the image is behind the gradient
            />
            <div className="absolute inset-0 w-full bg-gradient-to-r from-[--gradient2] to-[--gradient1] z-10">
              <div className='h-full w-full flex items-center'>
                <Container variant='large' className="mt-6">
                  <Title className='text-4xl md:text-5xl lg:text-6xl text-white capitalize'>
                  <motion.div
                     initial={{ opacity: 0, y:'200%', filter:"blur(8px)" }}
                     whileInView={{ opacity: 1, y: 0, filter:"blur(0px)" }}
                     transition={{ duration: 1 }}
                     viewport={{once:true}}
                     >
                      {getTitle()}
                    </motion.div>
                  </Title>
                </Container>
              </div>
            </div>         
    </div>
  )
}
