import React, { Suspense } from 'react';
import LoadingFallback from '@/components/shared/LoadingFallback';
import ProductsGrid from './ProductGridType';

type Props = {
  type: string;
  };

  

export default async function SecondPra({type}: Props) {
  return (
    <div className='w-full flex flex-col md:flex-row'>
      <Suspense fallback={<LoadingFallback/>}>
        <ProductsGrid typeName={type}/>
      </Suspense>
    </div>
  )
}