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
import { getBlogpost } from '@/lib/clients/contentful';

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

            return (
              <React.Fragment key={segment}>
                <BreadcrumbSeparator />
                <BreadcrumbItem className='capitalize'>
                  {index === pathSegments.length - 1 && segment === params.slug? (
                    <BreadcrumbPage>
                      {params.slug || segment}
                    </BreadcrumbPage>
                  ) : (
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
