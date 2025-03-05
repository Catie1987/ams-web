"use client"
import AnimatedLine from '../../../../components/features/AnimatedLine';
import AnimatedTitle from '../../../../components/features/AnimatedTitle';
import Title from '../../../../components/shared/Title';
import { useTranslations } from 'next-intl';
import React from 'react'


export default function FirstPra() {
    const t = useTranslations('ValuePage');
    const items = [
      {
        title: t('title1'),
        des: t('des1')
      },
      {
        title: t('title2'),
        des: t('des2')
      },
      {
        title: t('title3'),
        des: t('des3')
      },
      {
        title: t('title4'),
        des: t('des4')
      },
      {
        title: t('title5'),
        des: t('des5')
      }
    ];
  return (
    <div className='w-full mt-10'>
        <Title className='relative mb-10'>
                <div className='relative w-fit py-1'>{t('intro')}
                <AnimatedTitle/>
                </div>
                <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
        <ul className='w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {items.map((item,idx)=> (
            <li key={idx} className='flex flex-col gap-4'>
              <p className='font-semibold text-2xl uppercase'>
                {item.title}
              </p>
              <p>
                {item.des}
              </p>
            </li>
          ))}
        </ul>  
    </div>
  )
}
