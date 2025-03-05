"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import banner1 from '/public/assets/image/banner2.jpg';
import banner2 from '/public/assets/image/banner2.jpg';
import banner3 from '/public/assets/image/banner2.jpg';
import banner4 from '/public/assets/image/banner2.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../../../components/ui/carousel-square";
import { type CarouselApi } from "../../../components/ui/carousel-square"
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay'
import { useTranslations } from 'next-intl';
import Title from '../../../components/shared/Title';
import Container from '../../../components/layouts/Container';
import ArrowRight from '../../../components/features/Arrow-Right-cta';
import { motion, Variants } from 'framer-motion';

export default function Banner() {
    const t = useTranslations("HomePage.Banner");
    const autoplayRef = useRef(Autoplay({
      playOnInit: true,
      delay: 10000,
      stopOnInteraction: false
    }));
    const handleMouseEnter = () => {
      autoplayRef.current.stop();
    };
    const handleMouseLeave = () => {
      autoplayRef.current.play();
    };
    const handleResetAutoplay = () => {
      if (autoplayRef.current) {
        autoplayRef.current.reset();
      }
    };
    const itemscontainer: Variants = {
      show: {
        transition: {
          delay: 1,
          staggerChildren: 0.4,
          delayChildren: 1,
        },
      },
    };
    const itemvariant: Variants = { 
        show: { opacity: 1, x: 0, transition: { 
          duration: 0.4
        } }, 
        hidden: { opacity: 0, x: 40 }, };
    const items = [
      {
        url: banner1,
        header: t("acc1"),
        content: t("acc1des"),
        link: t("href1")
      },
      {
        url: banner2,
        header: t("acc2"),
        content: t("acc2des"),
        link: "#"
      },
      {
        url: banner3,
        header: t("acc3"),
        content: t("acc3des"),
        link: "#"
      },
      {
        url: banner4,
        header: t("acc4"),
        content: t("acc4des"),
        link: "#"
      }
    ];
    
    const [api, setApi] = React.useState<CarouselApi>()
    const logEmblaEvent = useCallback(
      () => {
      },
      []
    );
    useEffect(() => {
      if (api) 
          api.on('slidesInView', logEmblaEvent)
       }, 
       [api, logEmblaEvent]);
  return (
      <Carousel className="w-full h-full relative"
      setApi={setApi}
      plugins={[
        Fade(),
        autoplayRef.current
        ]}>
          <CarouselContent>
            {items.map((item, idx) => (
                <CarouselItem key={idx}>
                    <div className="relative h-screen w-full flex items-center justify-center">
                    <Image
                          src={item.url}
                          alt="Background"
                          priority
                          quality={100}
                          className="z-0 object-cover w-full h-full select-none object-[75%_75%]"  // Make sure the image is behind the gradient
                        />
                        <div className="absolute inset-0 w-full bg-gradient-to-r from-[--gradient2] to-[--gradient1] z-10"></div>
                        <div className='w-full h-full absolute flex items-center z-[11]'>
                          <Container variant='large'>
                            <motion.div
                            variants={itemscontainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}  
                            className='w-full h-full flex flex-col gap-10'>
                              <motion.span variants={itemvariant}><Title className='text-white md:text-4xl lg:text-5xl max-w-[600px] select-none'>
                                {item.header}
                              </Title></motion.span>
                              <motion.p variants={itemvariant} className='text-white text-base sm:text-lg font-medium max-w-[800px] select-none'>{item.content}</motion.p>
                              <motion.button
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              variants={itemvariant} 
                              className='md:w-[340px] w-full border px-8 rounded-md py-4 overflow-hidden relative group hover:bg-white hover:border-transparent hover:transition-all hover:duration-150 '>
                                <a href={item.link} className='w-full h-full flex items-center z-10 select-none'>
                                  <div className='absolute h-full w-full rounded-md inset-0 opacity-0 group-hover:transition-all group-hover:duration-150 delay-150 group-hover:opacity-100'></div>
                                  <span className='mr-4 group-hover:text-[--cta2] text-white text-base sm:text-lg font-medium transition-colors duration-300'>{t('button')}</span>
                                  <ArrowRight/>
                                </a>
                              </motion.button>
                            </motion.div>
                          </Container>
                        </div>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
          <div className='w-full flex items-center absolute bottom-10 sm:bottom-20 left-0 h-8'
          onClick={handleResetAutoplay}>
              <CarouselDots/>
          </div>
        </Carousel>
  )
}
