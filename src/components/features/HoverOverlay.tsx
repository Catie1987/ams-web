"use client"
import Title from '../shared/Title';
import { Icons } from '../Icons';
import { useTranslations } from 'next-intl';

const HoverOverlay = () => {
  const t = useTranslations('BlogPage')
  return (
    <div className="absolute left-0 top-0 hidden h-full w-full place-items-center bg-gradient-to-r from-[--gradient2] to-[--gradient1] px-4 text-white opacity-0 transition duration-300 hover:opacity-100 md:grid">
      <div className='flex gap-2 border border-white rounded-full py-2 px-6'>
        <Title className="text-center font-medium text-sm lg:text-base">{t('readmore')}</Title>
        <Icons.arrowRightWhite/>
      </div>
    </div>
  );
};

export default HoverOverlay;