import FirstPra from '../../../../../components/pages/04-Productpage/4a-MakerPage/FirstPra';
import SecondPra from '../../../../../components/pages/04-Productpage/4a-MakerPage/SecondPra';
import { getMaker, getMakers } from '../../../../../lib/clients/contentful';
import { setRequestLocale } from 'next-intl/server';
import React from 'react';
import { notFound } from 'next/navigation';

type Props = Promise<{ 
    slug: string,
    locale: string,
}>;

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

export async function generateStaticParams() {
  const locales = Object.keys(localeMap);
  const allMakers = await Promise.all(
    locales.map(async (locale) => {
      const makers = await getMakers();
      return makers.map((maker) => ({
        slug: maker.slug!,
        locale,
      }));
    })
  );
  return allMakers.flat();
}

  export async function generateMetadata(props: {
    params: Props
  }) {
    const params = await props.params;
    setRequestLocale(params.locale);
    const contentfulLocale = params.locale === 'vn' ? 'vi-VN' : 'en-US';
    const Maker = await getMaker(params.slug, contentfulLocale);
    if(!Maker) {
      
      return;
    }
    const { makerName  } = Maker;
    return {
      title: makerName,
      description: makerName,
    }
  }

export default async function MakerPage(props: {
    params: Props;
}) {
    const params = await props.params;
    setRequestLocale(params.locale);
    const contentfulLocale = params.locale === 'vn' ? 'vi-VN' : 'en-US';
    const Maker = await getMaker(params.slug, contentfulLocale);
    if(!Maker) {
      notFound();
    }
  return (
    
    <div className='w-full my-10'>
      <FirstPra makerDetail={Maker}/>
      <SecondPra maker={Maker.makerName}/>
    </div>
  )
}
