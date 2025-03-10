"use client";
import { Link } from '../../../../i18n/routing';
import Title from '../../../../components/shared/Title';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../../../../components/ui/carousel"

export default function Case2() {
  const t = useTranslations('BusinessPage.camera');
  const items: React.JSX.Element[] = [
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