"use client"
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname, useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';



export default function BreadCrumb() {
  const pathname = usePathname();
  const locale = useLocale();
  const params = useParams();
  const t = useTranslations('Navigation');
  const pathSegments = pathname.split('/').filter(Boolean);


  const breadcrumbMapping: { [key: string]: string } = {
    'gioi-thieu': t('about'),
    about: t('about'),
    overview: t('overview'),
    'tong-quan': t('overview'),
    principle: t('principle'),
    'nguyen-tac': t('principle'),
    vision: t('vision'),
    'tam-nhin': t('vision'),
    value: t('value'),
    'gia-tri': t('value'),
    business: t('business'),
    'nganh-nghe': t('business'),
    product: t('product'),
    'san-pham': t('product'),
    blog: t('blog'),
    'bai-viet': t('blog'),
    contact: t('contact'),
    "lien-he": t('contact'),
    automotive: t('business1'),
    'xe-hoi': t('business1'),
    speaker: t('business2'),
    'loa-tai-nghe': t('business2'),
    camera: t('business3'),
    'mo-dun-camera': t('business3'),
    semiconductor: t('business4'),
    'chat-ban-dan': t('business4'),
    electronic: t('business5'),
    'dien-tu': t('business5'),
    medical: t('business6'),
    'y-khoa': t('business6'),
    battery: t('business7'),
    'pin-nang-luong': t('business7'),
    construction: t('business8'),
    'xay-dung': t('business8'),
    maker: t('maker'),
    'thuong-hieu': t('maker'),
    type: t('type'),
    'the-loai': t('type'),
    function: t('function'),
    'chuc-nang' : t('function')
  };



  return (
    <div className='mt-2 px-2'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/`}>{t('home')}</BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.map((segment, index) => {
            if (segment === locale) return null;

            const href = `/` + pathSegments.slice(0, index + 1).join('/');
            const isLastSegment = index === pathSegments.length - 1;
            const isCurrentPage = segment === params.slug;

            return (
              <React.Fragment key={segment}>
                <BreadcrumbSeparator />
                <BreadcrumbItem className='capitalize'>
                  {isLastSegment  ? ( 
                    <BreadcrumbPage> 
                      {breadcrumbMapping[segment] || ''} 
                    </BreadcrumbPage> ) : ( 
                    <BreadcrumbLink href={href}> 
                      {breadcrumbMapping[segment] || segment} 
                      </BreadcrumbLink> 
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
