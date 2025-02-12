"use client";
import React, { ComponentProps, FC, ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { MenuContext } from './Header';
import menuAnimationData from '../../../public/assets/Animation-1733906245399.json'
import { Button } from '../ui/button';
import {Link, usePathname} from '@/i18n/routing';
import { cn } from '@/lib/utils';
import {useTranslations} from 'next-intl';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '../ui/separator';
import ToggleIcon from '../shared/ToggleIcon';
import { BusinessList } from '../shared/BusinessList';


export default function Menu() {
    const { isOpen, setIsOpen }: any = useContext(MenuContext);
    const [isShow, setIsShow] = useState(false);
    const [isShow1, setIsShow1] = useState(false);
    const [isShow2, setIsShow2] = useState(false);
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const t = useTranslations('Navigation');
    const businessItems = BusinessList();

    const showMenu = () => { 
      setIsShow(!isShow);
    };
    const showMenu1 = () => {
      setIsShow1(!isShow1);
    };
    const showMenu2 = () => {
      setIsShow2(!isShow2);
    };

    const handleKeyDown = (e: any) => {
        if (e.keyCode == 27) {
          setIsOpen(false);
        }
      };

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
          setIsShow(false);
          setIsShow1(false);
          setIsShow2(false);
        }
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [isOpen]);
      const firstUpdate = useRef(true);
      useEffect(() => {
        if (firstUpdate.current) {
          firstUpdate.current = false;
          return;
        }
        if (isOpen) {
            lottieRef.current?.playSegments([0, 70], true);
        } else {
            lottieRef.current?.playSegments([70, 140], true);
        }
        lottieRef.current?.setSpeed(2);
      }, [isOpen]);

      
    const handleMenuClick = () => {
        setIsOpen((isOpen: any) => !isOpen);
    };

    const handleCloseItem = () => {
      setIsOpen(false);
    }

    const menucontainer: Variants = {
        show: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: 0.04,
          },
        },
    };
    
      const overlayVariants: Variants = {
        collapsed: {
          height: 0,
        },
        expanded: {
          height: 400,
        },
      };
    
  return (
    <Button variant={"ghost"} size={"icon"} onKeyDown={handleKeyDown}>
        <div
        className="relative cursor-default grid h-6 w-6 items-center"
        onClick={handleMenuClick}
      >
        <Lottie lottieRef={lottieRef} 
            animationData={menuAnimationData} 
            loop={false} 
            autoplay={false} 
            style={{
                transform: 'scale(1)',
                position: 'absolute',
              }}
            />
            <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            variants = {overlayVariants}
            transition={{
              duration: 0.3,
              ease: [0.74, 0, 0.19, 1.02],
            }}
            className="fixed left-0 top-0 -z-10 grid h-screen w-screen bg-gray-50 items-start text-start"
          >
            <ScrollArea className='pt-16 h-[calc(100vh-4rem)] px-4 w-full pb-4'>
              <motion.ul
                className="space-y-4"
                variants={menucontainer}
                initial="hidden"
                animate="show"
              >
                <Separator/>
                <div className='w-full'>
                  <div className='w-full flex items-center justify-between'>
                    <NavItem href="/about" useVariants>{t('about')}</NavItem>
                    <ToggleIcon onClick={showMenu} />
                  </div>
                  <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isShow ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`flex flex-col ml-4 translate-y-2 gap-2 overflow-hidden text-base text-black/80`}
                  >
                    <NavItem href="/about/overview"><div className='text-base'>{t('overview')}</div></NavItem>
                    <NavItem href="/about/principle"><div className='text-base'>{t('principle')}</div></NavItem>
                    <NavItem href="/about/vision"><div className='text-base'>{t('vision')}</div></NavItem>
                    <NavItem href="/about/value"><div className='text-base'>{t('value')}</div></NavItem>
                  </motion.ul>
                </div>
                <Separator/>
                <div className='w-full'>
                  <div className='w-full flex items-center justify-between'>
                    <NavItem href="/business" useVariants>{t('business')}</NavItem>
                    <ToggleIcon onClick={showMenu1} />
                  </div>
                  <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isShow1 ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`flex flex-col ml-4 translate-y-2 gap-2 overflow-hidden text-base text-black/80`}
                  >
                    {businessItems.map((business, idx) => (
                      <NavItem key={idx} href={business.href}>
                        <div className='text-base'>
                          {t(business.title)}
                        </div>
                      </NavItem>
                    ))}
                  </motion.ul>
                </div>
                <Separator/>
                <div className='w-full'>
                  <div className='w-full flex items-center justify-between'>
                    <NavItem href="/product" useVariants>{t('product')}</NavItem>
                    <ToggleIcon onClick={showMenu2} />
                  </div>
                  <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isShow2 ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`flex flex-col ml-4 translate-y-2 gap-2 overflow-hidden text-base text-black/80`}
                  >
                    
                    <NavItem href="/product/maker"><div className='text-base'>{t('product1')}</div></NavItem>
                    <NavItem href="/product/type"><div className='text-base'>{t('product2')}</div></NavItem>
                    <NavItem href="/product/function"><div className='text-base'>{t('product3')}</div></NavItem>
                  </motion.ul>
                </div>
                <Separator/>
                <NavItem href="/blog" useVariants>{t('blog')}</NavItem>
                <Separator/>
                <NavItem href="/contact" useVariants><div className='bg-[--cta2] hover:bg-[--cta] text-white py-2 px-4 rounded-md'>{t('contact')}</div></NavItem>
              </motion.ul>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </Button>
  )
}

interface NavigationLinkProps extends ComponentProps<typeof Link> { 
  children: ReactNode;
  useVariants?: boolean;
  href: any;
};


function NavItem({
  href,
  children,
  useVariants = false,
  ...rest
}: NavigationLinkProps) {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href);
    const menuitem = {
      hidden: { y: 10, opacity: 0 },
      show: { y: 0, opacity: 1 },
    };
    if (useVariants) {
    return (
      <motion.li variants={menuitem}>
        <Link
          aria-current={isActive ? 'page' : undefined}
          href={href}
          {...rest}
          className={cn(
            'grid grow capitalize items-center text-xl font-medium text-black/80 w-fit transition duration-150 hover:text-[--cta2]',
            isActive && 'text-[--cta2]'
          )}
        >
          <div className='w-auto'>{children}</div>
        </Link>
      </motion.li>
    );
  } else {
    return (
    <li>
        <Link
          aria-current={isActive ? 'page' : undefined}
          href={href}
          {...rest}
          className={cn(
            'grid grow capitalize items-center text-xl font-medium text-black/80 w-fit transition duration-150 hover:text-[--cta2]',
            isActive && 'text-[--cta2]'
          )}
        >
          <div className='w-auto'>{children}</div>
        </Link>
      </li>
    )
  };
}

