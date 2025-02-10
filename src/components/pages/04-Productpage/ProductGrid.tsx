import { getProducts } from '@/lib/clients/contentful';
import { ProductDetail } from '@/lib/types';
import { getLocale, getTranslations } from 'next-intl/server';
import React, { FC } from 'react';
import ProductList from './ProductList';

interface ProductsGridProps { 
    page: number; 
    postsPerPage: number;
    query: string; 
    maker: string;
    type: string;
    functionCollection: string;
  }

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

const ProductsGrid: FC<ProductsGridProps> = async ({ page, postsPerPage, query, maker, type, functionCollection }) => {
    const locale = await getLocale();
    const t = await getTranslations('ProductPage');
    const makerNames = maker.split(',');
    const productTypes = type.split(',');
    const functionTitles = functionCollection.split(',');
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    const products = await getProducts({
        limit: postsPerPage,
        skip: (page - 1) * postsPerPage,
        locale: contentfulLocale,
        query,
        makerNames,
        productTypes,
        functionTitles,
      });
  if (!products.length) { 
    return (
    <div className='w-full min-h-40 flex items-center justify-center px-4'>
      <p className='text-black/50 max-w-96'>{t('notfound')}</p>
    </div>
  ) 
}
  return (
      <ul className="flex flex-col w-full">
        {products.map((product: ProductDetail, idx: number) => (   
                <ProductList key={idx} productList={product} />
        ))}
        <div className='w-full h-20 bg-white'></div>
      </ul>
      
  )
};
export default ProductsGrid;
