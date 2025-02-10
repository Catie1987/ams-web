import MakerImage from '@/components/features/MakerImage';
import Title from '@/components/shared/Title';
import { getRelatedProducts } from '@/lib/clients/contentful';
import { ProductDetail } from '@/lib/types';
import { getLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';
import React from 'react'

interface RelatedProductProps {
    typeTitle: string;
    id: string;
}

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

const RelatedProductGrid: React.FC<RelatedProductProps> = async ({id, typeTitle}) => {
    const locale = await getLocale();
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    const t = await getTranslations('ProductPage');
    const relatedProducts = await getRelatedProducts({ 
        typeTitle, 
        locale: contentfulLocale,
        id, 
    });
    
  return (
    <div className='w-full'>
        {relatedProducts.length > 0 ? (
            <ul className='w-full gap-4 grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-1 py-4'>
                {relatedProducts.map((product: ProductDetail, idx: number) => {
                    const path = locale === 'vn' ? `/san-pham/${product.id}` : `/product/${product.id}`;
                    return(
                        <li key={idx} className='px-2'>
                            <Link href={path} className='group'>
                                <div className='w-full relative aspect-[4/3] overflow-hidden border rounded-lg bg-white transition-shadow duration-300 group-hover:shadow-lg'>
                                    <MakerImage alt={product.name} src={product.image.url}/>
                                    <div className='absolute bottom-0 bg-[--cta3] group-hover:bg-[--cta2] transition-all duration-300 w-full flex items-center p-2'>
                                        <Title className='font-medium text-base md:text-lg text-white'>{product.name}</Title>
                                    </div>
                                </div>
                                
                            </Link>
                        </li>
                    )
                })}
            </ul>
        ): (
            <div className='h-40 flex items-center text-sm text-black/60'>No related products found</div>
        )}
    </div>
  )
}

export default RelatedProductGrid