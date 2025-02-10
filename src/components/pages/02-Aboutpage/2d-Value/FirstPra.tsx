"use client"
import AnimatedLine from '@/components/features/AnimatedLine';
import AnimatedTitle from '@/components/features/AnimatedTitle';
import Title from '@/components/shared/Title';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function FirstPra() {
    const t = useTranslations('ValuePage');
  return (
    <div className='w-full mt-10'>
        <Title className='relative mb-10'>
                <div className='relative w-fit py-1'>{t('intro')}
                <AnimatedTitle/>
                </div>
                <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
    </div>
  )
}
