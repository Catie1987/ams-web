import React, { FC, Suspense } from 'react';
import { getBlogposts} from '../../../lib/clients/contentful';
import { BlogPost } from '../../../lib/types';
import BlogPostItem from './BlogPostItem';
import { getLocale, getTranslations } from 'next-intl/server';
import { Separator } from '../../../components/ui/separator';
import BlogSkeleton from './BlogSkeleton';

interface BlogPostsGridProps { 
    page: number; 
    postsPerPage: number;
    query: string; 
    category: string[];
  }

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


const BlogPostsGrid: FC<BlogPostsGridProps> = async ({ page, postsPerPage, query, category }) => {
    const locale = await getLocale();
    const t = await getTranslations('ProductPage');
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    await delay(2000);
    const blogPosts = await getBlogposts({
        limit: postsPerPage,
        skip: (page - 1) * postsPerPage,
        locale: contentfulLocale,
        query,
        category
      });
      if (!blogPosts || blogPosts.length === 0) { 
      return (
        <div className='w-full min-h-40 flex items-center justify-center px-4'>
        <p className='text-black/50 max-w-96'>{t('notfound')}</p>
      </div>
    );
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 w-full">
        {blogPosts.map((blogPost: BlogPost, idx: number) => (
            
                <BlogPostItem key={idx} blogPost={blogPost} />
            
        ))}
      </div>
      <Separator className='mt-10 max-md:hidden'/>
    </>
  )
}

const BlogPostsGridSuspense: FC<BlogPostsGridProps> = (props) => ( 
<Suspense fallback={<BlogSkeleton count={props.postsPerPage}/>}> 
  <BlogPostsGrid {...props}/> 
</Suspense> );

export default BlogPostsGridSuspense;