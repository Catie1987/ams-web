"use client";
import { Link } from '@/i18n/routing';
import Title from '@/components/shared/Title';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import img1 from '../../../../../public/assets/business5/house1.jpg';
import img2 from '../../../../../public/assets/business5/house2.png';
import img3 from '../../../../../public/assets/business5/house3.jpg';
import img4 from '../../../../../public/assets/business5/house4.jpg';
import img5 from '../../../../../public/assets/business5/house5.png';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel"

export default function Case5() {
  const t = useTranslations('BusinessPage.electronic');
  const items: React.JSX.Element[] = [
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('cat5a')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing overflow-hidden'>
        <Image alt={t('cat5a')} src={img1} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-4930-G</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1875</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1189-A/B</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-02</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>MR-COAT series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KUV-3433-UV</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-01</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SDP series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-TA series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-CA series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    ),
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('cat5b')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing overflow-hidden'>
        <Image alt={t('cat5b')} src={img2} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-4930-G</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1875</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1189-A/B</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-02</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>MR-COAT series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KUV-3433-UV</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-01</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SDP series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-TA series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-CA series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    ),
    (
      
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('cat5c')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing overflow-hidden'>
        <Image alt={t('cat5c')} src={img3} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-4930-G</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1875</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1189-A/B</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-02</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>MR-COAT series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KUV-3433-UV</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-01</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SDP series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-TA series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-CA series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    ),
    (
      
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('cat5c')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing overflow-hidden'>
        <Image alt={t('cat5c')} src={img4} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-4930-G</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1875</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1189-A/B</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-02</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>MR-COAT series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KUV-3433-UV</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-01</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SDP series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-TA series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-CA series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    ),
    (
      
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('cat5c')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing overflow-hidden'>
        <Image alt={t('cat5c')} src={img5} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-4930-G</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1875</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1189-A/B</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-02</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>MR-COAT series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KUV-3433-UV</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M-BARRIER-01</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cat2a')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SDP series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-TA series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-CA series</Link>
                <span className='text-sm mt-[1px]'>{t('cat2a')}</span>
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