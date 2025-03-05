"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import logo from '/public/assets/image/logo-white.png';
import { Phone, Mail, Facebook, Youtube,Linkedin } from 'lucide-react';
import { Link } from '../../i18n/routing';
import { useTranslations } from 'next-intl';
import Container from './Container';
import GoToTop from '../features/GoToTop';
import { useScroll } from 'framer-motion';

export default function Footer() {
    const navbarT = useTranslations('Navigation');
    const footerT = useTranslations('Footer');
    const footerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    useEffect(() => {
        const handleScroll = () => {
            const footerRect = footerRef.current?.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const latestValue = scrollYProgress.get();

            if(footerRect){
            const footerPosition = latestValue + footerRect.top / viewportHeight - 1;
            }
        };
        const unsubscribe = scrollYProgress.on('change', handleScroll);
        return () => unsubscribe();
    }, [scrollYProgress]);
  return (
    <div ref={footerRef} className='w-full bg-[--cta] text-white flex flex-col items-center'>
        <Container variant='large'>
            <div className='py-8 h-auto flex items-center border-b border-gray-500/50 justify-between max-sm:flex-col max-sm:gap-y-4'>
                <Link href ={`/`} className=''>
                    <Image alt='' src={logo} width={150}/>
                </Link>
                <div className='font-bold text-sm text-gray-100 flex items-center gap-2 tracking-wider'>
                    <span>ADVANCED</span><div className='block h-2 w-2 border border-[--dot1] rounded-full bg-[--dot1]'></div>
                    <span>MATERIALS</span><div className='block h-2 w-2 border border-[--dot1] rounded-full bg-[--dot1]'></div>
                    <span>SOLUTION</span>
                </div>
            </div>
            <div className='py-8 h-auto grid grid-cols-6 max-sm:grid-cols-1 max-lg:grid-cols-3 gap-4 border-b border-gray-500/50 justify-between uppercase'>
                <div className='tracking-widest text-xs flex flex-col justify-between col-span-2 max-sm:col-span-1 max-lg:mb-10'>
                    <div className='flex flex-col relative'>
                        <p className='font-bold mb-4'>{footerT('name')}</p>
                        <div className='absolute w-7 h-1 bg-[--dot1] top-4'></div>
                        <p>{footerT('address')}</p>
                        <div className='inline-flex gap-4 mt-4'><Phone size={16}/><span>+84 24 6329 5652</span></div>
                        <div className='inline-flex gap-4 mt-4'><Mail size={16}/><span className='normal-case'>info@amsvn.net</span></div>
                    </div>
                    <div className='inline-flex gap-3 mt-6'>
                        <a href='' className='h-10 w-10 border border-gray-500/50 bg-black/20 flex items-center justify-center rounded-full hover:bg-black/70 hover:border-gray-300 transition-colors duration-300'><Facebook size={18}/></a>
                        <a href='' className='h-10 w-10 border border-gray-500/50 bg-black/20 flex items-center justify-center rounded-full hover:bg-black/70 hover:border-gray-300 transition-colors duration-300'><Youtube size={18}/></a>
                        <a href='' className='h-10 w-10 border border-gray-500/50 bg-black/20 flex items-center justify-center rounded-full hover:bg-black/70 hover:border-gray-300 transition-colors duration-300'><Linkedin size={18}/></a>
                    </div>
                </div>
                <div className='tracking-widest'>
                    <div><Link className='hover:underline hover:underline-offset-2 font-bold' href={`/about`}>{navbarT('about')}</Link></div>
                    <ul className='capitalize text-sm flex flex-col gap-1 mt-2 text-gray-300 max-sm:hidden'>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/about/overview`}>{navbarT('overview')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/about/principle`}>{navbarT('principle')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/about/vision`}>{navbarT('vision')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/about/value`}>{navbarT('value')}</Link></li>
                    </ul>
                </div>
                <div className='tracking-widest'>
                    <div><Link className='hover:underline hover:underline-offset-2 font-bold' href={`/business`}>{navbarT('business')}</Link></div>
                    <ul className='capitalize text-sm flex flex-col gap-1 mt-2 text-gray-300 max-sm:hidden'>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/business/automotive`}>{navbarT('business1')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/business/speaker`}>{navbarT('business2')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/business/camera`}>{navbarT('business3')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/business/semiconductor`}>{navbarT('business4')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/business/electronic`}>{navbarT('business5')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/business/medical`}>{navbarT('business6')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/business/battery`}>{navbarT('business7')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/business/construction`}>{navbarT('business8')}</Link></li>
                    </ul>
                </div>
                <div className='tracking-widest'>
                    <div><Link className='hover:underline hover:underline-offset-2 font-bold' href={`/product`}>{navbarT('product')}</Link></div>
                    <ul className='capitalize text-sm flex flex-col gap-1 mt-2 text-gray-300 max-sm:hidden'>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/product/maker`}>{navbarT('product1')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/product/type`}>{navbarT('product2')}</Link></li>
                        <li><Link className='hover:underline hover:underline-offset-2' href={`/product/function`}>{navbarT('product3')}</Link></li>
                    </ul>
                </div>
                <div className='tracking-widest flex flex-col gap-2 max-sm:gap-4'>
                    <div><Link className='hover:underline hover:underline-offset-2 font-bold' href={`/blog`}>{navbarT('blog')}</Link></div>
                    <div><Link className='hover:underline hover:underline-offset-2 font-bold' href={`/contact`}>{navbarT('contact')}</Link></div>
                    <div><Link className='hover:underline hover:underline-offset-2 font-bold' href={`/legal-compliance`}>{footerT('legal')}</Link></div>
                    <div><Link className='hover:underline hover:underline-offset-2 font-bold' href={`/job`}>{footerT('job')}</Link></div>
                </div>
            </div>
            <div className='py-8 flex justify-between items-center max-sm:flex-col max-sm:gap-4'>
                <div className='text-xs text-gray-300'>© 2024 AMS. All rights reserved</div>
                <div className='text-sm text-gray-300 flex divide-x divide-gray-300/50 gap-2'>
                    <Link href ={`/site-map`} className='hover:underline hover:underline-offset-2'>{footerT('site')}</Link>
                    <Link href ={`/privacy-statement`} className='hover:underline hover:underline-offset-2 pl-2'>{footerT('privacy')}</Link>
                    <Link href ={`/terms-of-use`} className='hover:underline hover:underline-offset-2 pl-2'>{footerT('term')}</Link>
                </div>
            </div>
        </Container>
        <GoToTop footerRef={footerRef}/>
    </div>
  )
}
