"use client"
import React, { useState } from 'react';
import AnimatedLine from '@/components/features/AnimatedLine'
import AnimatedTitle from '@/components/features/AnimatedTitle'
import Title from '@/components/shared/Title'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import img from '../../../../../public/assets/business2/speaker.jpg'
import PulseAnimate from '@/components/features/PulseAnimate';
import ArrowDown from '@/components/features/Arrow-Down';
import SubCategory from './Sub';

export default function Business2() {
    const t = useTranslations('BusinessPage.speaker');
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const labels = ['button1', 'button2', 'button3', 'button4', 'button5'];
  return (
    <div className='w-full min-h-screen'>
        <Title className='relative mb-10'>
            <div className='relative w-fit py-1'>{t('intro')}
                <AnimatedTitle/>
            </div>
            <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
        <p>{t('subintro')}</p>
        <div className='flex w-full md:flex-row flex-col-reverse mt-10 z-10'>
            <div className='flex flex-col gap-2 mr-auto w-full max-w-[380px] mt-10'>
            {labels.map((label, i) => (
                 <button className={`w-full border px-8 rounded-md py-4 overflow-hidden relative group bg-white ${(hoverIndex === i || clickedIndex === i) ? 'border-transparent transition-all duration-150' : ''}`}
                 key={i}
                 onMouseEnter={() => setHoverIndex(i)}
                 onMouseLeave={() => hoverIndex !== clickedIndex && setHoverIndex(null)}
                 onClick={() => {setClickedIndex(i); setHoverIndex(i)}}>
                    <a href='#subcategory' className='w-full h-full flex items-center bg-white z-10'>
                        <div className={`absolute h-full w-full border-[--cta2] rounded-md border-2 inset-0 ${(hoverIndex === i || clickedIndex === i) ? 'scale-100 opacity-100 transition-all duration-150 delay-150' : 'opacity-0 scale-90'}`}></div>
                        <span className={`mr-4 transition-colors duration-300 text-left ${(hoverIndex === i || clickedIndex === i) ? 'text-[--cta2]' : ''}`}>{t(label)}</span>
                        <ArrowDown/>
                    </a>
                </button>
            ))}
            </div>
            <div className='relative w-auto flex'>
                <Image alt='speaker' src={img} height={600} width={800} className='w-full h-full max-w-[800px] max-h-[600] opacity-60 select-none grayscale'/>
                <a href='#subcategory' className='absolute flex justify-center items-center left-[24%] top-[77%] sm:top-[75%] h-[2%] w-[2%] hover:cursor-pointer'
                onMouseEnter={() => setHoverIndex(0)}
                onMouseLeave={() => hoverIndex !== clickedIndex && setHoverIndex(null)}
                onClick={() => {setClickedIndex(0); setHoverIndex(0)}}>
                    {hoverIndex === 0 || clickedIndex === 0 ? (<PulseAnimate/>): (<div className='absolute h-2 w-2 bg-[--cta2] rounded-full'></div>)}
                    {clickedIndex === 0  && <div className='h-[400px] w-[2px] bg-[--cta2] top-2 absolute -z-10 md:block hidden'></div> }
                </a>
                <a href='#subcategory' className='absolute flex justify-center items-center left-[40%] top-[68%] sm:top-[66%] h-[2%] w-[2%] hover:cursor-pointer'
                onMouseEnter={() => setHoverIndex(1)}
                onMouseLeave={() => hoverIndex !== clickedIndex && setHoverIndex(null)}
                onClick={() => {setClickedIndex(1); setHoverIndex(1)}}>
                    {hoverIndex === 1 || clickedIndex === 1 ? (<PulseAnimate/>): (<div className='absolute h-2 w-2 bg-[--cta2] rounded-full'></div>)}
                    {clickedIndex === 1  && <div className='h-[400px] w-[2px] bg-[--cta2] top-2 absolute -z-10 md:block hidden'></div> }
                </a>
                <a href='#subcategory' className='absolute flex justify-center items-center left-[52%] top-[46%] sm:top-[44%] h-[2%] w-[2%] hover:cursor-pointer'
                onMouseEnter={() => setHoverIndex(2)}
                onMouseLeave={() => hoverIndex !== clickedIndex && setHoverIndex(null)}
                onClick={() => {setClickedIndex(2); setHoverIndex(2)}}>
                    {hoverIndex === 2 || clickedIndex === 2 ? (<PulseAnimate/>): (<div className='absolute h-2 w-2 bg-[--cta2] rounded-full'></div>)}
                    {clickedIndex === 2  && <div className='h-[400px] w-[2px] bg-[--cta2] top-2 absolute -z-10 md:block hidden'></div> }
                </a>
                <a href='#subcategory' className='absolute flex justify-center items-center left-[50%] top-[77%] sm:top-[75%] h-[2%] w-[2%] hover:cursor-pointer'
                onMouseEnter={() => setHoverIndex(3)}
                onMouseLeave={() => hoverIndex !== clickedIndex && setHoverIndex(null)}
                onClick={() => {setClickedIndex(3); setHoverIndex(3)}}>
                    {hoverIndex === 3 || clickedIndex === 3 ? (<PulseAnimate/>): (<div className='absolute h-2 w-2 bg-[--cta2] rounded-full'></div>)}
                    {clickedIndex === 3  && <div className='h-[400px] w-[2px] bg-[--cta2] top-2 absolute -z-10 md:block hidden'></div> }
                </a>
                <a href='#subcategory' className='absolute flex justify-center items-center left-[77%] top-[42%] sm:top-[40%] h-[2%] w-[2%] hover:cursor-pointer'
                onMouseEnter={() => setHoverIndex(4)}
                onMouseLeave={() => hoverIndex !== clickedIndex && setHoverIndex(null)}
                onClick={() => {setClickedIndex(4); setHoverIndex(4)}}>
                    {hoverIndex === 4 || clickedIndex === 4 ? (<PulseAnimate/>): (<div className='absolute h-2 w-2 bg-[--cta2] rounded-full'></div>)}
                    {clickedIndex === 4  && <div className='h-[500px] w-[2px] bg-[--cta2] top-2 absolute -z-10 md:block hidden'></div> }
                </a>
            </div>
        </div>
        <div className='block w-1 h-16' id="subcategory"></div>
        {clickedIndex !== null &&
        
          <SubCategory title={t(labels[clickedIndex])} index={clickedIndex} />
        
        }
    </div>
  )
}

