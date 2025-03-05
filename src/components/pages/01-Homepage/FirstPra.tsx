"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import Counter from '../../../components/features/Counter';

export default function FirstPra() {
  const t = useTranslations('HomePage.FirstPra')
  return (
    <div className='w-full flex flex-col items-center gap-y-6 md:gap-x-8 overflow-x-hidden'>
      <div className='w-full flex items-start'>
        <p className='text-gray-900 mt-10 text-xl md:text-3xl lg:text-4xl font-bold max-w-4xl md:leading-[1.3em] lg:leading-[1.3em]'>
            <span className='text-[--cta2]'>{t('introdetail1')}</span>
            <span>{t('introdetail2')}</span>
            <span className='text-[--cta2]'>{t('introdetail3')}</span>
            <span>{t('introdetail4')}</span>
        </p>
      </div>
        <div className='w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between gap-10 text-gray-500 mt-10 px-5 mb-10'>
          <div className='flex flex-col w-fit'>
            <h1 className='text-[--cta2] text-5xl lg:text-6xl font-bold pb-2'><Counter from={0} to={102}/></h1>
            <span className='inline-block pl-2 pt-1 font-normal text-gray-600 border-t border-gray-300 text-base pr-10'>{t("fig1")}</span>
          </div>
          <div className='flex flex-col w-fit'>
            <h1 className='text-[--cta2] text-5xl lg:text-6xl font-bold pb-2 flex gap-2'><Counter from={0} to={3000}/>+</h1>
            <span className='inline-block pl-2 pt-1 font-normal text-gray-600 border-t border-gray-300 text-base pr-10'>{t("fig2")}</span>
          </div>
          <div className='flex flex-col w-fit'>
            <h1 className='text-[--cta2] text-5xl lg:text-6xl font-bold pb-2 flex gap-2'><Counter from={0} to={80}/>+</h1>
            <span className='inline-block pl-2 pt-1 font-normal text-gray-600 border-t border-gray-300 text-base pr-10'>{t("fig3")}</span>
          </div>
          <div className='flex flex-col w-fit'>
            <h1 className='text-[--cta2] text-5xl lg:text-6xl font-bold pb-2 flex gap-2'><Counter from={0} to={10}/>+</h1>
            <span className='inline-block pl-2 pt-1 font-normal text-gray-600 border-t border-gray-300 text-base pr-10'>{t("fig4")}</span>
          </div>
        </div>
    </div>
  )
}
