import Title from '../../../components/shared/Title';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import message from "/public/assets/image/About/ams-wall.jpg"
import React from 'react'
import AnimatedTitle from '../../../components/features/AnimatedTitle';
import AnimatedLine from '../../../components/features/AnimatedLine';


export default function ThirdPra() {
    const t = useTranslations('AboutPage');
  return (
    <div className='w-full mt-20'>
        <Title className='relative mb-10'>
                <div className='relative w-fit py-1'>{t('message')}
                <AnimatedTitle/>
                </div>
                <AnimatedLine height={'8px'} width={'80px'}/>
            </Title>
        <div className='w-full flex flex-col-reverse lg:flex-row gap-4 items-center'>
            <div className='text-gray-800'>
                <Title className='text-2xl md:text-3xl lg:text-4xl'>{t('mess1')}</Title>
                <p className='mt-2'>{t('messline1')}</p>
                <Title className='text-2xl md:text-3xl lg:text-4xl mt-4'>{t('mess2')}</Title>
                <p className='mt-2'>{t('messline2')}</p>
            </div>
            <Image alt='top message' src={message} priority width={500} height={400}/>
        </div>
    </div>
  )
}
