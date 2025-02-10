"use client";
import { createContext, useState } from 'react';
import Container from './Container';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import Navigation from '../shared/Navigation';
import NavigationLink from '../shared/NavigationLink';
import Image from 'next/image';
import logo from '../../../public/assets/image/logo.png';
import LocaleSwitcher from '../shared/LocaleSwitcher';
import Menu from './Menu';

export const MenuContext = createContext({
    isOpen: false,
    setIsOpen: (_isOpen: boolean) => {},
  });

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();
    const handleLogoClick = () => { 
      setIsOpen(false); 
    };
  return (
    <header className='w-full z-40 h-14 border-b shadow-lg fixed flex justify-center items-center bg-gray-50'>
      <MenuContext.Provider value={{ isOpen, setIsOpen }}>
        <Container variant='large'>
          <div className='w-full h-full items-center flex justify-between text-sm'>
            <NavigationLink href="/">
              <Image alt='' src={logo} width={80} height={24} priority onClick={handleLogoClick}/>
            </NavigationLink>
            {!isMobile && <Navigation/>}
            <div className='flex items-center h-full gap-2'>
              <LocaleSwitcher />
              {isMobile && <Menu />}
            </div>
          </div>
        </Container>
      </MenuContext.Provider>
    </header>
  )
}
