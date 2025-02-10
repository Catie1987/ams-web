import React from 'react';
import { getlandingBlogposts } from '@/lib/clients/contentful';
import { getLocale } from 'next-intl/server';
import { formatDateDay } from '@/lib/helpers';
import Link from 'next/link';
import ExternalRight from '@/components/features/External-Right';

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

const directoryMap: { [key: string]: string } = {
    'vn': 'bai-viet',
    'en': 'blog',
    // Add other locales as needed
  };

export default async function BlogList({ pick }: { pick: boolean }) {
    const locale = await getLocale();
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    const directory = directoryMap[locale as unknown as string] || 'blog';
    const blogPosts = await getlandingBlogposts({
        pick: pick,
        locale: contentfulLocale
    })
  return (
    <ul className='w-full'>
        {blogPosts.map((post, idx)=> (
            <li key={idx}>
                <Link href={`/${locale}/${directory}/${post.slug}`} className='w-full flex relative items-center justify-between gap-4 py-6 group overflow-hidden'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex w-full gap-4 items-center flex-wrap'>
                            <p className='font-bold text-sm text-black/50'>{formatDateDay(post.sys.firstPublishedAt)}</p>
                            <div className='w-fit flex gap-4'>
                            {post.category && post.category.map((cat, index) => (
                                <div key={index} className='bg-gray-100 px-3 py-1 text-sm border rounded-full w-fit'>
                                    {cat}
                                </div>
                            ))}
                            </div>
                        </div>
                        <p className='group-hover:text-[--cta2] font-medium transition-colors duration-300'>
                            {post.title}
                        </p>
                    </div>
                    <ExternalRight/>
                    <div className='absolute h-[2px] w-full left-0 bottom-0 bg-gray-100'></div>
                    <div className='absolute h-[2px] w-full left-0 bottom-0 bg-[--cta2] group-hover:duration-0 group-hover:translate-x-0 transition-transform duration-300 translate-x-full'></div>
                </Link>
            </li>
        ))}
    </ul>
  )
}
