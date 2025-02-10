import OptimizedImage from '@/components/features/OptimizedImage';
import Link from 'next/link';
import { getRelatedposts } from '@/lib/clients/contentful';
import { BlogPost } from '@/lib/types';
import { getLocale, getTranslations } from 'next-intl/server';
import React, { FC } from 'react';
import Title from '@/components/shared/Title';
import { Icons } from '@/components/Icons';
import { Separator } from '@/components/ui/separator';

interface RelatedPostProps {
    category: string[];
    slug: string;
}

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

const RelatedPostGrid: FC<RelatedPostProps> = async ({category, slug}) => {
    const locale = await getLocale();
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    const t = await getTranslations('BlogPage');
    
    const relatedPosts = await getRelatedposts({
        locale: contentfulLocale,
        category,
        slug,
      });
  return (
    <div className='w-full flex flex-col'>
        {relatedPosts.map((post: BlogPost, idx: number) => {
            const path = locale === 'vn' ? `/bai-viet/${post.slug}` : `/blog/${post.slug}`;
            return(
            <div key={idx} className='px-2'>
                <Link href={path} className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 py-4 gap-y-1'>
                    <div className='rounded-md overflow-hidden w-40 aspect-[4/3]'><OptimizedImage alt={post.title} src={post.coverImage.url}/></div>
                    <div className='flex flex-col h-full justify-between'>
                        <Title className='font-medium text-base'>{post.title}</Title>
                        <div className='flex gap-2 mt-2'>
                            <Title className="text-center font-medium text-sm">{t('readmore')}</Title>
                            <div className='h-auto flex items-center mt-1'><Icons.arrowRightBlack/></div>
                        </div>
                    </div>
                </Link>
                <Separator className='hidden md:block'/>
            </div>)
        })}
    </div>
  )
};
export default RelatedPostGrid; 
