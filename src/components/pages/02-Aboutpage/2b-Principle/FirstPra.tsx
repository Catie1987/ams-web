import { useTranslations } from 'next-intl';
import Image from 'next/image';
import message from "../../../../../public/assets/image/About/about-chart.jpg"
import React from 'react'
import Title from '@/components/shared/Title';
import AnimatedTitle from '@/components/features/AnimatedTitle';
import AnimatedLine from '@/components/features/AnimatedLine';


export default function ThirdPra() {
    const t = useTranslations('PrinciplePage');
  return (
    <div className='w-full mt-10'>
      <Title className='relative mb-10'>
                <div className='relative w-fit py-1'>{t('intro')}
                <AnimatedTitle/>
                </div>
                <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
        <div className='w-full flex flex-col-reverse lg:flex-row gap-4 items-center'>
            <div className=' flex flex-col'>
                <p className='my-4'>{t('line1')}</p>
                <p className='my-4'>{t('line2')}</p>
            </div>
            <Image alt='top message' src={message} priority width={600} height={400}/>
        </div>
    </div>
  )
}
