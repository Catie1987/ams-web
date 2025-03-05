import FirstPra from '../../../../../components/pages/04-Productpage/4c-FunctionPage/FirstPra';
import SecondPra from '../../../../../components/pages/04-Productpage/4c-FunctionPage/SecondPra';
import { getFunction, getFunctions } from '../../../../../lib/clients/contentful';
import { setRequestLocale } from 'next-intl/server';
import React from 'react';


const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

export async function generateStaticParams() {
  const locales = Object.keys(localeMap);
  const allFunctions = await Promise.all(
    locales.map(async (locale) => {
      const contentfulLocale = localeMap[locale];
      const functions = await getFunctions(contentfulLocale);
      return functions.map((func) => ({
        slug: func.slug!,
        locale,
      }));
    })
  );
  return allFunctions.flat();
}

  export async function generateMetadata({params}: {
    params: Promise<{ locale: string; slug: string }>
  }) {
    const {locale, slug}= await params;
    setRequestLocale(locale);
    const contentfulLocale = locale === 'vn' ? 'vi-VN' : 'en-US';
    const Function = await getFunction(slug, contentfulLocale);
    if(!Function) {
      
      return;
    }
    const { title  } = Function;
    return {
      title: title,
      description: title,
    }
  }

export default async function FunctionPage({params}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const {locale, slug}= await params;
  setRequestLocale(locale);
  const contentfulLocale = locale === 'vn' ? 'vi-VN' : 'en-US';
  const Function = await getFunction(slug, contentfulLocale);
    if(!Function) {
      
      return;
    }
  return (
    
    <div className='w-full my-10'>
      <FirstPra functionDetail={Function} />
      <SecondPra functionName={Function.slug}/>
    </div>
  )
}
