import React from 'react';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import FirstPra from '../../../../components/pages/04-Productpage/4a-Maker/FirstPra';
import GroupMaker from '../../../../components/pages/04-Productpage/4a-Maker/GroupMaker';

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
    <div className="w-full pt-8 pb-20">
      <FirstPra/>
      <GroupMaker/>
    </div>
  )
}
