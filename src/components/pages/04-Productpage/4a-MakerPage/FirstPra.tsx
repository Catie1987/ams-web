"use client";
import MakerImage from '@/components/features/MakerImage';
import { Icons } from '@/components/Icons';
import { MakerDetail } from '@/lib/types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { FC } from 'react';

interface MakerProps {
    makerDetail: MakerDetail;
  }

  const FirstPra: FC<MakerProps> = ({ makerDetail }) => {
    const t = useTranslations('MakerPage');
    const {makerName, logo} = makerDetail;
  return (
    <div className='w-full'>
        <Link href={t('backlink')} className='flex w-fit gap-2 border border-black/80 rounded-full py-2 px-6 mb-5 md:mb-0'>
            <div className='h-auto flex items-center fill-slate-500'><Icons.arrowLeftBlack/></div>
            <p className="text-center font-medium text-sm">{t('goback')}</p>
        </Link>
        <div className='w-full gap-4 grid grid-cols-1 md:grid-cols-2 mb-4 mt-10 items-center'>
            <div className='order-2'>
                <p className=''>
                    <span>{t('sub1')}</span>
                    <span className='font-bold mx-1'>{makerName}</span>
                    <span>{t('sub2')}</span>
                    <span className='font-bold mx-1'>{makerName}</span>
                    <span>{t('sub3')}</span>
                </p>
            </div>
            <div className='w-full flex items-center justify-start md:justify-end order-1 md:order-3'>
                <div className='max-w-40'>{logo?.url && 
                    <MakerImage alt={makerName} src={logo.url}/>
              } </div>
            </div>
      </div>
    </div>
  )
}

export default FirstPra;
