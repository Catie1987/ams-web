import React from 'react';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import FirstPra from '../../../../components/pages/04-Productpage/4b-Type/FirstPra';
import GroupType from '../../../../components/pages/04-Productpage/4b-Type/GroupType';


type Props = {
    params: Promise<{ locale: string }>;
  };

  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const {locale}= await params;
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});
    setRequestLocale(locale);
    return {
        title: t('type'),
    }
  }

export default function page() {
  return (
    <div className="w-full pt-8 pb-20">
        <FirstPra/>
        <GroupType/>
    </div>
  )
}
