import React, { Suspense } from 'react';
import LoadingFallback from '../../../../components/shared/LoadingFallback';
import ProductsGrid from './ProductGridFunction';

type Props = {
  functionName: string;
  };

  

export default async function SecondPra({functionName}: Props) {
  return (
    <div className='w-full flex flex-col md:flex-row'>
      <Suspense fallback={<LoadingFallback/>}>
        <ProductsGrid functionName={functionName}/>
      </Suspense>
    </div>
  )
}