"use client"
import React from 'react';
import Image from 'next/image';
import banner from '../../../../public/assets/image/bannerproduct.jpg'
import Container from '@/components/layouts/Container';
import Title from '@/components/shared/Title';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

type PathMap = { [locale: string]: { [pathSegment: string]: string; }; };

export default function Banner() {
  const t = useTranslations('BannerPage');
  const pathname = usePathname();
  const locale = useLocale();
  const pathMap: PathMap = { 
      en: { 
        product: 'product', 
      }, 
      vn: { 
        'san-pham': 'product', 
      } 
    };
  const getTitle = () => {
  const segments = pathname.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  if (locale in pathMap && lastSegment in pathMap[locale]) {
    return t(pathMap[locale as keyof typeof pathMap][lastSegment]); 
  }
  return t('product');
;}
  return (
    <div className="relative h-20 w-full block">
              
    </div>
  )
}
