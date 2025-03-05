"use client";
import { Link } from '../../../../i18n/routing';
import Title from '../../../../components/shared/Title';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import img1 from '/public/assets/business1/interior1.jpg';
import img2 from '/public/assets/business1/interior2.png';
import img3 from '/public/assets/business1/interior3.png';
import img4 from '/public/assets/business1/exterior1.webp';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../../../../components/ui/carousel"

export default function Case4() {
  const t = useTranslations('BusinessPage.automotive');
  const items: React.JSX.Element[] = [
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('wire')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('wire')} src={img1} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('terminal')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SOLDER BAR M705</Link>
                <span className='text-sm mt-[1px]'>{t('barM705')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SOLDER BAR M35</Link>
                <span className='text-sm mt-[1px]'>{t('barm35')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>FLUX T-1</Link>
                <span className='text-sm mt-[1px]'>{t('fluxt1')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('connector')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KR-101-10</Link>
                <span className='text-sm mt-[1px]'>{t('kr10110')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-1842</Link>
                <span className='text-sm mt-[1px]'>{t('ke1842')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>LEONA 14G15</Link>
                <span className='text-sm mt-[1px]'>{t('leona14g15')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>LEONA FG170</Link>
                <span className='text-sm mt-[1px]'>{t('leonafg170')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('protecttape')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TESA 51608</Link>
                <span className='text-sm mt-[1px]'>{t('tesa51608')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TESA 51035</Link>
                <span className='text-sm mt-[1px]'>{t('tesa51035')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>NO.2117TVH</Link>
                <span className='text-sm mt-[1px]'>{t('no2117tvh')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>3M BT3005</Link>
                <span className='text-sm mt-[1px]'>{t('3mbt3005')}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    ),
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('body')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('body')} src={img2} width={600} height={400} className='object-cover w-auto h-auto'/>
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
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('interior')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('interior')} src={img3} width={600} height={400} className='object-cover w-auto h-auto'/>
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
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('exterior')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('exterior')} src={img4} width={600} height={400} className='object-cover w-auto h-auto'/>
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
