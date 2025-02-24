import React from 'react'
import { getProductTypes } from '@/lib/clients/contentful'
import { getLocale } from 'next-intl/server';
import { Separator } from '@/components/ui/separator';
import TypeGrid from './TypeGrid';

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

export default async function GroupType() {
    const locale = await getLocale();
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    const productTypes = await getProductTypes(contentfulLocale);
    const categories = productTypes.map(product => product.category);
    const uniqueCategories = [...new Set(categories)];
    
  return (
    <div className='mt-20 w-full'>
        <div className='w-full flex flex-col'>
            {uniqueCategories.map((type, idx)=> (
                <div key={idx} className='w-full'>
                    <p className='font-black text-2xl md:text-3xl lg:text-4xl mb-4'>{type}</p>
                    <Separator/>
                    <div className='mt-4 mb-10'>
                        <TypeGrid category={type}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
