import React from 'react';
import { Metadata } from 'next';
import { title } from 'process';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
  };

  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const {locale}= await params;
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});
    setRequestLocale(locale);
    return {
        title: t('maker'),
    }
  }

export default function page() {
  return (
    <div>page</div>
  )
}
