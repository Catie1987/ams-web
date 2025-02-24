import { getProductsbyType } from '@/lib/clients/contentful';
import { ProductDetail } from '@/lib/types';
import { getLocale, getTranslations } from 'next-intl/server';
import React, { FC } from 'react';
import ProductList from '../ProductList';
import Title from '@/components/shared/Title';
import ArrowRight from '@/components/features/Arrow-Right-cta';

interface ProductsGridProps { 
    typeName: string;
  }

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

const ProductsGrid: FC<ProductsGridProps> = async ({typeName}) => {
    const t = await getTranslations('TypePage');
    const locale = await getLocale();
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    const products = await getProductsbyType({
        typeName,
        locale: contentfulLocale
      });
    const uniqueCategories = Array.from(new Set(products.map((product: ProductDetail) => product.type?.category)));
    const uniqueCategory = uniqueCategories[0];
    
  if (!products.length) { 
    return (
    <div className='w-full min-h-40 flex items-center justify-center px-4'>
      <p className='text-black/50 max-w-96'>{t('notfound')}</p>
    </div>
  ) 
}
  return (
      <>
      <div className='w-full md:w-96 mt-10 mr-4 mb-4 relative'>
          <div className='border w-full rounded-lg flex flex-col shadow-lg p-4 sticky top-20 mb-10 md:mb-0'>
            <Title>{t('feature')}</Title>
            <p className='mt-5'>
              {t('featurecontent1')}
              <span className='font-bold mx-1'>{uniqueCategory}</span>
              {t('featurecontent2')}
              <span className='font-bold mx-1'>{products.length}</span>
              {t('featurecontent3')}
            </p>
            <button className='mt-6 md:w-[340px] w-full border px-8 rounded-md py-6 overflow-hidden relative group bg-[--cta2] hover:bg-white hover:border-transparent hover:transition-all hover:duration-150 '>
                <a href={`${t('link1')}${encodeURIComponent(uniqueCategory || "")}`} className='w-full h-full flex items-center z-10 text-white'>
                  <div className='absolute h-full w-full border-[--cta2] rounded-md border-2 scale-90 group-hover:scale-100 inset-0 opacity-0 group-hover:transition-all group-hover:duration-150 delay-150 group-hover:opacity-100'></div>
                  <span className='mr-4 group-hover:text-[--cta2] transition-colors duration-300 text-start'>{`${t('button1')}${uniqueCategory}`}</span>
                  <ArrowRight/>
                </a>
            </button>
            <p className='mt-5'>
              {t('featurecontent4')}
              <button className='mt-6 md:w-[340px] w-full border px-8 rounded-md py-6 overflow-hidden relative group bg-[--cta2] hover:bg-white hover:border-transparent hover:transition-all hover:duration-150 '>
                <a href={t('link')} className='w-full h-full flex items-center z-10 text-white'>
                  <div className='absolute h-full w-full border-[--cta2] rounded-md border-2 scale-90 group-hover:scale-100 inset-0 opacity-0 group-hover:transition-all group-hover:duration-150 delay-150 group-hover:opacity-100'></div>
                  <span className='mr-4 group-hover:text-[--cta2] transition-colors duration-300'>{t('button')}</span>
                  <ArrowRight/>
                </a>
            </button>
            </p>
          </div>
      </div>
      <ul className="flex flex-col w-full">
        {products.map((product: ProductDetail, idx: number) => (   
                <ProductList key={idx} productList={product} />
        ))}
        <div className='w-full h-20 bg-white'></div>

      </ul>
      </>
  )
};
export default ProductsGrid;
