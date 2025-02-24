import FirstPra from '@/components/pages/04-Productpage/4c-FunctionPage/FirstPra';
import SecondPra from '@/components/pages/04-Productpage/4c-FunctionPage/SecondPra';
import { getFunction, getFunctions } from '@/lib/clients/contentful';
import React from 'react';

type Props = Promise<{ 
    slug: string,
    locale: string,
}>;

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

export async function generateStaticParams() {
    const productFunctions = await getFunctions();
    return productFunctions.map((func) => ({
        slug: func.slug!,
    }))
  };

  export async function generateMetadata(props: {
    params: Props
  }) {
    const params = await props.params;
    const Function = await getFunction(params.slug);
    if(!Function) {
      
      return;
    }
    const { title  } = Function;
    return {
      title: title,
      description: title,
    }
  }

export default async function FunctionPage(props: {
    params: Props;
}) {
    const params = await props.params;
    const Function = await getFunction(params.slug);
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
