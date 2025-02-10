import PageLayout from '@/components/shared/PageLayout';
import React, { ReactNode } from 'react';
import Banner from '@/components/pages/03-Businesspage/Banner';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import BreadCrumb from '@/components/layouts/BreadCrumb';

type Props = {
    children: ReactNode;
    params: {locale: string};
  };

  export async function generateMetadata({
    params,
  }: Omit<Props, 'children'>) {
    const {locale}= await params;
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});
    setRequestLocale(locale);
    return {
      title: {
        template: '%s | AMS VIETNAM',
        default: 'AMS VIETNAM',
      },
      description: t('business-des')
    };
  }

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
