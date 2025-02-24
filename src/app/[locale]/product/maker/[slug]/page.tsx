import FirstPra from '@/components/pages/04-Productpage/4a-MakerPage/FirstPra';
import SecondPra from '@/components/pages/04-Productpage/4a-MakerPage/SecondPra';
import { getMaker, getMakers } from '@/lib/clients/contentful';
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
    const makers = await getMakers();
    return makers.map((maker) => ({
        slug: maker.slug!,
    }))
  };

  export async function generateMetadata(props: {
    params: Props
  }) {
    const params = await props.params;
    const Maker = await getMaker(params.slug);
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
    const Maker = await getMaker(params.slug);
    if(!Maker) {
      
      return;
    }
  return (
    
    <div className='w-full my-10'>
      <FirstPra makerDetail={Maker}/>
      <SecondPra maker={Maker.makerName}/>
    </div>
  )
}
