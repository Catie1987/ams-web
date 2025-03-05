import React, { Suspense } from 'react';
import LoadingFallback from '../../../../components/shared/LoadingFallback';
import ProductsGrid from './ProductGridMaker';

type Props = {
  maker: string;
  };

  const localeMap: { [key: string]: string } = { en: 'en-US', vn: 'vi-VN', };
  

export default async function SecondPra({maker}: Props) {
  return (
    <div className='w-full flex flex-col md:flex-row'>
      <Suspense fallback={<LoadingFallback/>}>
        <ProductsGrid makerName={maker}/>
      </Suspense>
    </div>
  )
}

