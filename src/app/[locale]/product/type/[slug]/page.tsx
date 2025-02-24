import FirstPra from '@/components/pages/04-Productpage/4b-TypePage/FirstPra';
import SecondPra from '@/components/pages/04-Productpage/4b-TypePage/SecondPra';
import { getProductType, getProductTypes } from '@/lib/clients/contentful';
import React from 'react';


type Params = Promise<{ 
  slug: string,
  locale: string,
}>;

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

export async function generateStaticParams(props: {
  params: Params;
}) {
    const locale = await props.params;
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    const productTypes = await getProductTypes(contentfulLocale);
    return productTypes.map((type) => ({
        slug: type.slug!,
    }))
  };

  export async function generateMetadata(props: {
    params: Params
  }) {
    const params = await props.params;
    const contentfulLocale = localeMap[params.locale as unknown as string] || 'en-US';
    const Type = await getProductType(params.slug, contentfulLocale);
    if(!Type) {
      
      return;
    }
    const { title  } = Type;
    return {
      title: title,
      description: title,
    }
  }

export default async function TypePage(props: {
    params: Params;
}) {
    const params = await props.params;
    const contentfulLocale = localeMap[params.locale as unknown as string] || 'en-US';
    const Type = await getProductType(params.slug, contentfulLocale);
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
