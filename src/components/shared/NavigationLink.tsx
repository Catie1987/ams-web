'use client';

import clsx from 'clsx';
import {ComponentProps, ReactNode} from 'react';
import {Link, usePathname} from '@/i18n/routing';


interface NavigationLinkProps extends ComponentProps<typeof Link> { 
  children: ReactNode;
  show? : boolean; 
  href: any;
};

export default function NavigationLink({
  href,
  children,
  show = false,
  ...rest
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'relative inline-block px-2 py-3 transition-colors font-medium',
        isActive ? 'text-[--cta2]' : 'text-black/80 hover:text-[--cta2]'
      )}
      href={href}
      {...rest}
    >
      {children}
      {show && isActive && (
        <span className='absolute w-[6px] h-[6px] rounded-full bg-[--cta2] left-1/2 bottom-1 transform -translate-x-1/2'></span>
        )}
      
    </Link>
  );
}