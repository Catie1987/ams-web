import FirstPra from '../../../../../components/pages/04-Productpage/4b-TypePage/FirstPra';
import SecondPra from '../../../../../components/pages/04-Productpage/4b-TypePage/SecondPra';
import { getProductType, getProductTypes } from '../../../../../lib/clients/contentful';
import { setRequestLocale } from 'next-intl/server';
import React from 'react';


const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

export async function generateStaticParams() {
  const locales = Object.keys(localeMap);
  const allProductTypes = await Promise.all(
    locales.map(async (locale) => {
      const contentfulLocale = localeMap[locale];
      const productTypes = await getProductTypes(contentfulLocale);
      return productTypes.map((type) => ({
        slug: type.slug!,
        locale,
      }));
    })
  );
  return allProductTypes.flat();
}

  export async function generateMetadata({params}: {
    params: Promise<{ locale: string; slug: string }>
  }) {
    const {locale, slug}= await params;
    setRequestLocale(locale);
    const contentfulLocale = locale === 'vn' ? 'vi-VN' : 'en-US';
    const Type = await getProductType(slug, contentfulLocale);
    if(!Type) {
      
      return;
    }
    const { title  } = Type;
    return {
      title: title,
      description: title,
    }
  }

export default async function TypePage({params}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const {locale, slug}= await params;
    setRequestLocale(locale);
    const contentfulLocale = locale === 'vn' ? 'vi-VN' : 'en-US';
    const Type = await getProductType(slug, contentfulLocale);
    if(!Type) {
      
      return;
    }
  return (
    
    <div  className='w-full my-10'>
      <FirstPra typeDetail={Type}/>
      <SecondPra type={Type.slug}/>
    </div>

  )
}
