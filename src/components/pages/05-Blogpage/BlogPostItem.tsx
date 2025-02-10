"use client"
import React, { FC} from 'react';
import { BlogPost } from '@/lib/types';
import Title from '@/components/shared/Title';
import OptimizedImage from '@/components/features/OptimizedImage';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import HoverOverlay from '@/components/features/HoverOverlay';
import Link from 'next/link';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { Icons } from '@/components/Icons';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';

interface BlogPostItemProps {
    blogPost: BlogPost;
  }

const BlogPostItem:FC<BlogPostItemProps> = ({blogPost}) => {
    const {title, slug, subTitle, coverImage, category} = blogPost;
    const blogPostPath = usePathname();
    const useMobile = useIsMobile();
    const t = useTranslations('BlogPage');
    const searchParams = useSearchParams(); 
    const { replace } = useRouter();

    const handleCategoryClick = (cat: string) => { 
        const params = new URLSearchParams(searchParams); 
        params.set('category', cat);
        params.set('page', '1'); 
        replace(`${blogPostPath}?${params.toString()}`); 
    };



  return (
    <>
        <div className='md:hover:-translate-y-2 md:transition-all md:duration-300 md:hover:shadow-lg relative flex flex-row md:flex-col justify-between aspect-auto md:aspect-[9/8] lg:aspect-[4/3] w-full overflow-hidden rounded-none md:rounded-2xl md:border'>
            <div className='overflow-hidden h-full flex w-1/3 items-start max-md:mt-3 relative md:w-full'>
                <Link href={`${blogPostPath}/${slug}`} className='md:w-full md:h-full lg:aspect-[4/3] max-md:border border-transparent max-md:rounded-xl max-md:overflow-hidden'>
                    <OptimizedImage alt='' src={coverImage.url}/>
                    <HoverOverlay/>
                </Link>
            </div>
            <div className="relative z-10 md:max-h-48 h-auto w-full md:px-4 md:py-4 px-5 py-2 flex flex-col md:justify-between bg-transparent md:bg-white">
                
                    <Title as='h2' className='text-base sm:text-lg md:text-xl font-semibold md:min-h-16 flex items-center mb-2 hover:text-[--cta2] hover:underline hover:underline-offset-2'>
                        <Link href={`${blogPostPath}/${slug}`}><p className={`md:line-clamp-2 h-auto md:min-h-14`}>{title}</p></Link>
                    </Title>
                    <ul className='text-xs md:text-sm flex flex-wrap gap-2 mb-4'>
                        {category && category.map((cat, idx) => (
                            <li 
                            key={idx} 
                            onClick={() => handleCategoryClick(cat)} 
                            className='border py-1 px-4 rounded-full bg-stone-100 hover:bg-[--cta2] transition-colors duration-300 hover:text-white hover:cursor-pointer'>
                                {cat}
                            </li>
                        ))}
                    </ul>
                    <p className='line-clamp-2 text-sm text-gray-500 h-10'>{subTitle}</p>
                { useMobile && (
                    <Link href={`${blogPostPath}/${slug}`} className='flex gap-2 mt-2'>
                        <Title className="text-center font-medium text-sm">{t('readmore')}</Title>
                        <div className='h-auto flex items-center mt-1'><Icons.arrowRightBlack/></div>
                    </Link>
                )}
            </div>
        </div>
        { useMobile && (<Separator/>)}
    </>
  )
}


export default BlogPostItem;