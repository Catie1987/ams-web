"use client";
import { Link } from '@/i18n/routing';
import Title from '@/components/shared/Title';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import img1 from '../../../../../public/assets/business6/keyboard1.jpg';
import img2 from '../../../../../public/assets/business6/keyboard2.avif';
import img3 from '../../../../../public/assets/business6/keyboard3.png';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel"

export default function Case1() {
  const t = useTranslations('BusinessPage.medical');
  const items: React.JSX.Element[] = [
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('cat1a')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 h-auto flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('cat1a')} src={img1} width={600} height={400} className='object-cover w-auto h-[400px]'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('casesealant')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-4930-G</Link>
                <span className='text-sm mt-[1px]'>{t('ke4930g')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1875</Link>
                <span className='text-sm mt-[1px]'>{t('ke1875')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1189-A/B</Link>
                <span className='text-sm mt-[1px]'>{t('ke1189')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-02</Link>
                <span className='text-sm mt-[1px]'>{t('mbarrier02')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('substratecoating')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>MR-COAT series</Link>
                <span className='text-sm mt-[1px]'>{t('ke4930g')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KUV-3433-UV</Link>
                <span className='text-sm mt-[1px]'>{t('ke1875')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-01</Link>
                <span className='text-sm mt-[1px]'>{t('ke1189')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('heatdissipation')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SDP series</Link>
                <span className='text-sm mt-[1px]'>{t('sdp')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-TA series</Link>
                <span className='text-sm mt-[1px]'>{t('tc-ta')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-CA series</Link>
                <span className='text-sm mt-[1px]'>{t('tc-ca')}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    ), 
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('cat1b')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 w-auto flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('cat1b')} src={img2} width={600} height={300} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('connector')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SOLDER BAR M705</Link>
                <span className='text-sm mt-[1px]'>{t('barM705')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>FLUX T-1</Link>
                <span className='text-sm mt-[1px]'>{t('ke1875')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KR-101-10</Link>
                <span className='text-sm mt-[1px]'>{t('kr10110')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1842</Link>
                <span className='text-sm mt-[1px]'>{t('ke1842')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('pcbsubstrate')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M705-ULT369</Link>
                <span className='text-sm mt-[1px]'>{t('m705ult369')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1871</Link>
                <span className='text-sm mt-[1px]'>{t('ke1871')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>LOCTITE 3517M</Link>
                <span className='text-sm mt-[1px]'>{t('loctite3517m')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>X-32-4049</Link>
                <span className='text-sm mt-[1px]'>{t('x324049')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>LOCTITE ABLESTIK 2033SC</Link>
                <span className='text-sm mt-[1px]'>{t('2033sc')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>X-32-20202</Link>
                <span className='text-sm mt-[1px]'>{t('x322020')}</span>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
      </>
    ),
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('cat1c')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 w-auto flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('cat1c')} src={img3} width={600} height={300} className='object-cover w-auto h-[400px]'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('connector')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SOLDER BAR M705</Link>
                <span className='text-sm mt-[1px]'>{t('barM705')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>FLUX T-1</Link>
                <span className='text-sm mt-[1px]'>{t('ke1875')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KR-101-10</Link>
                <span className='text-sm mt-[1px]'>{t('kr10110')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1842</Link>
                <span className='text-sm mt-[1px]'>{t('ke1842')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('pcbsubstrate')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M705-ULT369</Link>
                <span className='text-sm mt-[1px]'>{t('m705ult369')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1871</Link>
                <span className='text-sm mt-[1px]'>{t('ke1871')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>LOCTITE 3517M</Link>
                <span className='text-sm mt-[1px]'>{t('loctite3517m')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>X-32-4049</Link>
                <span className='text-sm mt-[1px]'>{t('x324049')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>LOCTITE ABLESTIK 2033SC</Link>
                <span className='text-sm mt-[1px]'>{t('2033sc')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>X-32-20202</Link>
                <span className='text-sm mt-[1px]'>{t('x322020')}</span>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
      </>
    ),
    ];
      return (
        <Carousel className="w-full">
            <CarouselContent>
                {items.map((item, idx) => (
                    <CarouselItem key={idx}>
                        {item}
                    </CarouselItem>
                ))}
            </CarouselContent>
              <div className='w-full px-8 flex items-center relative mt-8 h-8'>
                  <CarouselDots/>
              </div>
          </Carousel>
      )
    }