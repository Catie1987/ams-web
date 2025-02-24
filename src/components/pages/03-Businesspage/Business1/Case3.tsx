"use client";
import { Link } from '@/i18n/routing';
import Title from '@/components/shared/Title';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import img1 from '../../../../../public/assets/business1/lamp1.webp';
import img2 from '../../../../../public/assets/business1/lamp2.webp';
import img3 from '../../../../../public/assets/business1/lamp3.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel"

export default function Case3() {
  const t = useTranslations('BusinessPage.automotive');
  const items: React.JSX.Element[] = [
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('housing')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('housing')} src={img1} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('coverseal')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SIKAMELT-700</Link>
                <span className='text-sm mt-[1px]'>{t('sikamelt700')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>CEMEDINE HM207</Link>
                <span className='text-sm mt-[1px]'>{t('hm207')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>E-MAX 904-SC</Link>
                <span className='text-sm mt-[1px]'>{t('emax904sc')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('plasticmould')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>IV1900R PC</Link>
                <span className='text-sm mt-[1px]'>{t('iv1900r')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>ULTRAMID B3GK24</Link>
                <span className='text-sm mt-[1px]'>{t('b3gk24')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>ULTRADUR 4300G</Link>
                <span className='text-sm mt-[1px]'>{t('ultradur4300g')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('reflector')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>ULTRADUR B4560</Link>
                <span className='text-sm mt-[1px]'>{t('ultradurb4560')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SABIC PMMA P15OE</Link>
                <span className='text-sm mt-[1px]'>{t('sabicpmmap150e')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>CM-205G</Link>
                <span className='text-sm mt-[1px]'>{t('cm205g')}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    ),
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('projection')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('projection')} src={img2} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('gasketing')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-4897</Link>
                <span className='text-sm mt-[1px]'>{t('ke4897')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-45</Link>
                <span className='text-sm mt-[1px]'>{t('ke45')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>DOWSIL 3-6265</Link>
                <span className='text-sm mt-[1px]'>{t('dowsil36265')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SIKAFLEX-201</Link>
                <span className='text-sm mt-[1px]'>{t('sikaflex201')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('protection')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>X-48-5030</Link>
                <span className='text-sm mt-[1px]'>{t('x485030')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>X-40-9309A</Link>
                <span className='text-sm mt-[1px]'>{t('x409309a')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>STYCAST CC 8555</Link>
                <span className='text-sm mt-[1px]'>{t('cc8555')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('plasticmould')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SUMIPEX G5098</Link>
                <span className='text-sm mt-[1px]'>{t('sumipexg5098')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>DIAKON CLG356</Link>
                <span className='text-sm mt-[1px]'>{t('diakonclg356')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>ACRYPET VH001</Link>
                <span className='text-sm mt-[1px]'>{t('acrypetvh001')}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    ),
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('ledmodule')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing overflow-hidden'>
        <Image alt={t('ledmodule')} src={img3} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
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
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('solder')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>M705-ULT369</Link>
                <span className='text-sm mt-[1px]'>{t('m705ult369')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SOLDER BAR M708</Link>
                <span className='text-sm mt-[1px]'>{t('barm708')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SEN F3 M35RK</Link>
                <span className='text-sm mt-[1px]'>{t('senf3m35rk')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>FLUX ES-1100C</Link>
                <span className='text-sm mt-[1px]'>{t('es1100c')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('cleaning')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>DF-555U</Link>
                <span className='text-sm mt-[1px]'>{t('df555u')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>WS-923U</Link>
                <span className='text-sm mt-[1px]'>{t('ws923u')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>HA-4410U</Link>
                <span className='text-sm mt-[1px]'>{t('ha4410u')}</span>
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
