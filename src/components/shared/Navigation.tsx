import {useTranslations} from 'next-intl';
import NavigationLink from './NavigationLink';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import React from 'react';
import { cn } from '../../lib/utils';
import Image from 'next/image';
import logo from '/public/assets/image/logo.png'
import { BusinessList } from './BusinessList';
import { SearchForm } from './search-form';
import { Factory, Waypoints, Settings } from 'lucide-react';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const businessItems = BusinessList();

  return (
      <NavigationMenu className="items-center flex justify-between text-sm">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavigationLink href="/about" show>{t('about')}</NavigationLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationLink className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#9fcbf1] to-[#dfedfa] p-6 no-underline outline-none focus:shadow-md' 
                  href="/about/overview">
                    <Image priority alt='AMS' src={logo} width={100}/>
                    <div className="mb-2 mt-4 text-lg font-bold text-gray-800">
                    {t('overview')}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    {t('overview-des')}
                    </p>
                  </NavigationLink>
                </li>
                  <NavigationLink href='/about/principle'
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-[--cta2] focus:bg-accent hover:bg-gray-100/50 focus:text-[--cta2]"
                  )}>
                    <div className="text-sm font-semibold leading-none">{t('principle')}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {t('principle-des')}
                    </p>
                  </NavigationLink>
                  <NavigationLink href='/about/vision'
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-[--cta2] focus:bg-accent hover:bg-gray-100/50 focus:text-[--cta2]",
                    
                  )}>
                    <div className="text-sm font-semibold leading-none">{t('vision')}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {t('vision-des')}
                    </p>
                  </NavigationLink>
                  <NavigationLink href='/about/value'
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-[--cta2] focus:bg-accent hover:bg-gray-100/50 focus:text-[--cta2]",
                    
                  )}>
                    <div className="text-sm font-semibold leading-none">{t('value')}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {t('value-des')}
                    </p>
                  </NavigationLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavigationLink href="/business" show>{t('business')}</NavigationLink>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {businessItems.map((business, idx) => (
                      <NavigationLink key={idx} href={business.href}
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-[--cta2] focus:bg-accent hover:bg-gray-100/50 focus:text-[--cta2]"
                      )}>
                        <div className="text-sm font-semibold leading-none">{t(business.title)}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t(business.description)}
                        </p>
                      </NavigationLink>
                    ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavigationLink href="/product" show>{t('product')}</NavigationLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-1">
              <li className="row-span-1">
                <div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#9fcbf1] to-[#dfedfa] p-6 no-underline outline-none focus:shadow-md'>
                  <div className="mb-2 mt-4 text-gray-800 font-bold">
                        {t('search')}
                  </div>
                  <div className='w-full'>
                      <SearchForm placeholder={t('search-input')}/>
                    </div>
                </div>
              </li>
                <NavigationLink href='/product/maker'
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-[--cta2] focus:bg-accent hover:bg-gray-100/50 focus:text-[--cta2]"
                  )}>
                    <div className='flex h-full gap-2'>
                      <div className='h-full aspect-square flex items-center'>
                        <Factory className='group-hover:text-[--cta2]' size={40}/>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <div className="text-sm font-semibold leading-none">{t('product1')}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('productdes1')}
                        </p>
                      </div>
                    </div>
                  </NavigationLink>
                  <NavigationLink href='/product/type'
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-[--cta2] focus:bg-accent hover:bg-gray-100/50 focus:text-[--cta2]"
                    )}>
                    <div className='flex h-full gap-2'>
                      <div className='h-full aspect-square flex items-center'>
                        <Waypoints className='group-hover:text-[--cta2]' size={40}/>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <div className="text-sm font-semibold leading-none">{t('product2')}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('productdes2')}
                        </p>
                      </div>
                    </div>
                  </NavigationLink>
                  <NavigationLink href='/product/function'
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-[--cta2] focus:bg-accent hover:bg-gray-100/50 focus:text-[--cta2]"
                    )}>
                    <div className='flex h-full gap-2'>
                      <div className='h-full aspect-square flex items-center'>
                        <Settings className='group-hover:text-[--cta2]' size={40}/>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <div className="text-sm font-semibold leading-none">{t('product3')}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('productdes3')}
                        </p>
                      </div>
                    </div>
                  </NavigationLink>
            </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationLink href="/blog" show>{t('blog')}</NavigationLink>
          </NavigationMenuItem>
            
            <NavigationLink href="/contact">
              <Button>{t('contact')}</Button>
            </NavigationLink>
        
         </NavigationMenuList>
      </NavigationMenu>
  );
}
