"use client";
import { Link } from '../../../../i18n/routing';
import Title from '../../../../components/shared/Title';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import firstimg from '/public/assets/business1/display.jpg';
import secondimg from '/public/assets/business1/adasmodule.jpg';
import thirdimg from '/public/assets/business1/battery-management-system.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../../../../components/ui/carousel"

export default function Case2() {
  const t = useTranslations('BusinessPage.automotive');
  const items: React.JSX.Element[] = [
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('display')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('display')} src={firstimg} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('displaybond')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-4301-UV</Link>
                <span className='text-sm mt-[1px]'>{t('ker4301uv')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>STP-102-UV</Link>
                <span className='text-sm mt-[1px]'>{t('stp102uv')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KER-4530</Link>
                <span className='text-sm mt-[1px]'>{t('ker4530')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('emi')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>EMI-TC803</Link>
                <span className='text-sm mt-[1px]'>{t('emitc803')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>EC-BH Series</Link>
                <span className='text-sm mt-[1px]'>{t('emitc803')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-3711-U</Link>
                <span className='text-sm mt-[1px]'>{t('ke3711u')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('thermalmaterial')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-3493</Link>
                <span className='text-sm mt-[1px]'>{t('ke3493')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-3466</Link>
                <span className='text-sm mt-[1px]'>{t('ke3466')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>PCS-CR-10</Link>
                <span className='text-sm mt-[1px]'>{t('pcscr10')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-10SAS</Link>
                <span className='text-sm mt-[1px]'>{t('tc10sas')}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    ),
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('adasmodule')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing'>
        <Image alt={t('adasmodule')} src={secondimg} width={600} height={400} className='object-cover w-auto h-auto'/>
        </div>
        <ul className='basis-1/2 w-full flex flex-col list-none list-outside gap-4'>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('potting')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KMC-2285C</Link>
                <span className='text-sm mt-[1px]'>{t('kmc2285c')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KMC-4885F</Link>
                <span className='text-sm mt-[1px]'>{t('kmc4885f')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>UF-820A/B</Link>
                <span className='text-sm mt-[1px]'>{t('uf820ab')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>SU-3001A/B</Link>
                <span className='text-sm mt-[1px]'>{t('su3001ab')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('imageboard')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>PENGUIN CEMENT 1027S</Link>
                <span className='text-sm mt-[1px]'>{t('1027s')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>ECCOBOND E 1216M</Link>
                <span className='text-sm mt-[1px]'>{t('e1216m')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>EP 5330</Link>
                <span className='text-sm mt-[1px]'>{t('ep5330')}</span>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='flex gap-2 items-center'>
              <div className='h-2 w-2 bg-[--cta2]'></div>
              <p className='text-[--cta2] font-semibold md:text-lg text-base'>{t('thermalmaterial')}</p>
            </div>
            <div className='ml-5'>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-3493</Link>
                <span className='text-sm mt-[1px]'>{t('ke3493')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>KE-3466</Link>
                <span className='text-sm mt-[1px]'>{t('ke3466')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>PCS-CR-10</Link>
                <span className='text-sm mt-[1px]'>{t('pcscr10')}</span>
              </div>
              <div className='flex flex-wrap gap-x-2 items-center'>
                <Link href={'/product'} className='hover:underline underline-offset-2 font-medium'>TC-10SAS</Link>
                <span className='text-sm mt-[1px]'>{t('tc10sas')}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    ),
    (
      <>
      <Title className='text-[--cta2] text-xl md:text-2xl'>{t('bms')}</Title>
      <div className='mt-6 flex md:flex-row flex-col gap-y-4 gap-x-6'>
        <div className='basis-1/2 max-h-[400px] flex items-center select-none cursor-grab active:cursor-grabbing overflow-hidden'>
        <Image alt={t('bms')} src={thirdimg} width={600} height={400} className='object-cover w-auto h-auto'/>
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
