"use client"
import OptimizedImage from '../../../components/features/OptimizedProductImage';
import MakerImage from '../../../components/features/MakerImage';
import Title from '../../../components/shared/Title';
import { Separator } from '../../../components/ui/separator';
import { ProductDetail } from '../../../lib/types';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Icons } from '../../../components/Icons';
import ProductSkeleton from './ProductSkeleton';

interface ProductListProps {
    productList: ProductDetail;
  }

const ProductList:FC<ProductListProps> = ({productList}) => {
  const {id, name, image, packing, maker,shelflife, type, functionCollection} = productList;
  const t = useTranslations('ProductPage');
  const [functions, setFunctions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { if (functionCollection?.items) { 
    const fetchedFunctions = functionCollection.items.map((func) => func.title); 
    setFunctions(fetchedFunctions); 
  } 
  const timer = setTimeout(() => { 
    setLoading(false); 
  }, 2000);
  return () => clearTimeout(timer);
  }, [functionCollection]);

  if (loading) {
    return (
      <ProductSkeleton/>
    )
  }
  
  return (
    <li className='list-none py-4'>
       <div className='relative flex flex-row gap-4 overflow-hidden h-full'>
          <Link href={`${t('productlink')}/${id}`} className='px-0 md:px-2 h-auto w-auto basis-1/3 relative'>
                <OptimizedImage alt='' src={image.url}/>
                {maker?.logo?.url &&
                <div className='items-start h-8 flex absolute bg-white bottom-0 left-2'>
                  <MakerImage alt='' src={maker.logo.url}/>
                </div>
                }
          </Link>
          <div className='basis-2/3 h-full flex flex-col w-full justify-between gap-4'>
            <Title className='text-lg md:text-xl'>{name}</Title>
            <ul className='text-sm sm:text-base capitalize flex flex-col gap-2'>
              <li className='flex items-center justify-between flex-wrap gap-2'>
                <div className='flex items-center'>
                  <span className='text-black/60 mr-2'>{t('packing')}</span>
                  <p className='font-semibold'>{packing}</p>
                </div>
                <div className='flex items-center'>
                  <span className='text-black/60 mr-2'>{t('shelflife')}</span>
                  {shelflife?  (<p className='font-semibold'>{shelflife}</p>): (<p className='text-black/60'>N/a</p>)}
                </div>
              </li>
              <li className='flex items-center flex-wrap'>
                <span className='text-black/60 mr-2'>{t('type')}</span>
                <p className='font-semibold'>{type?.title}</p>
              </li>
              <li className='flex items-center flex-wrap gap-2'>
                <span className='text-black/60 mr-2'>{t('function')}</span>
                {functions.length ? ( 
                  <div className='flex gap-2 flex-wrap'> 
                  {functions.map((func, index) => (
                     <p key={index} className='text-sm font-semibold border py-1 px-3 rounded-full bg-gray-100'>{func}</p> 
                     ))} 
                  </div> ) : ( 
                    <p className='text-black/60'>{t('nofunction')}</p> 
                  )}
              </li>
              <li className='flex items-center md:items-end flex-wrap'>
                <span className='text-black/60 mr-4'>{t('maker')}</span>
                <Title className='text-base md:text-lg uppercase text-[--cta2]'>{maker?.makerName}</Title>
              </li>
            </ul>
            <Link className='overflow-hidden hover:bg-[--cta] bg-[--cta2] w-fit px-8 flex h-10 items-center border border-transparent rounded-full gap-4 justify-center' 
             href={`${t('productlink')}/${id}`}>
              <p className='text-sm text-white'>{t('detail')}</p>
              <Icons.arrowRightWhite/>
            </Link>
          </div>
       </div>
       <Separator className='my-4'/>
    </li>
  )
}

export default ProductList;