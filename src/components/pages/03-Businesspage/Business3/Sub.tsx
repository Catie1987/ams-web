
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import Case1 from './Case1';
import Case2 from './Case2';
import Case3 from './Case3';

interface SubCategoryprops {
  title: string;
  index: number;
}

export default function SubCategory({title, index}: SubCategoryprops) {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations('BusinessPage.camera')
  useEffect(()=> {
    const timer = setTimeout(()=> {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [index]);

  const renderContent = () => {
    if (isLoading) {
      return <div className='min-h-60 w-full flex items-center justify-center'>Loading...</div>
    }
    switch (index) {
      default:
        return null;
        case 0:
          return (
            <Case1/>
          );
        case 1:
        return (
            <Case2/>
        );
        case 2:
        return (
          <Case3/>
        );
    };
  }
  return (
    <div className='w-full min-h-96 border-2 border-[--cta2] mt-10 rounded-2xl bg-white z-20'>
      <div className='w-full p-4'>
        <p className='font-bold text-black/80 md:text-base text-sm my-4'>{title}</p>
        <div className='w-full pb-4'>{renderContent()}</div>
      </div>
    </div>
  )
}
