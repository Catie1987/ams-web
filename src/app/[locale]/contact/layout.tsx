import PageLayout from '@/components/shared/PageLayout';
import React, { ReactNode } from 'react';
import Banner from '@/components/pages/06-Contactpage/Banner';
import { setRequestLocale } from 'next-intl/server';
import BreadCrumb from '@/components/layouts/BreadCrumb';


type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
  };

export default async function Layout({
    children,
    params,
}: Props) {
    const {locale} = await params;
    setRequestLocale(locale);
  return (
    <PageLayout banner={<Banner/>}>
        <BreadCrumb/>
        {children}
    </PageLayout>
  )
}
