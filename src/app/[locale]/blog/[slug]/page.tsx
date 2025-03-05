import React from 'react';
import Container from '../../../../components/layouts/Container';
import { getBlogpost, getBlogposts } from '../../../../lib/clients/contentful';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Title from '../../../../components/shared/Title';
import { Separator } from '../../../../components/ui/separator';
import Headlines from '../../../../components/pages/05-Blogpage/Headlines';
import RichTextRenderer from '../../../../components/pages/05-Blogpage/RichTextRenderer';
import RelatedPostGrid from '../../../../components/pages/05-Blogpage/RelatedPost';
import { Link } from '../../../../i18n/routing';
import { Icons } from '../../../../components/Icons';

type Params = Promise<{ 
    slug: string,
    locale: string,
}>;

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

export async function generateStaticParams() {
    const locales = Object.keys(localeMap);
    const allBlogPosts = await Promise.all(
      locales.map(async (locale) => {
        const contentfulLocale = localeMap[locale];
        const blogPosts = await getBlogposts({ locale: contentfulLocale });
        return blogPosts.map((blogPost) => ({
          slug: blogPost.slug!,
          locale,
        }));
      })
    );
    return allBlogPosts.flat();
  }

  export async function generateMetadata(props: {
    params: Params
  }) {
    const params = await props.params;
    const contentfulLocale = localeMap[params.locale as unknown as string] || 'en-US';
    const blogPost = await getBlogpost(params.slug, contentfulLocale);
    if(!blogPost) {
      
      return;
    }
    const { title, subTitle } = blogPost;
    return {
      title: title,
      description: subTitle,
    }
  }


  export default async function BlogPostPage(props: {
    params: Params;
}) {
    const params = await props.params;
    setRequestLocale(params.locale);
    const contentfulLocale = params.locale === 'vn' ? 'vi-VN' : 'en-US';
    const slug = params.slug;
    const t = await getTranslations('BlogPage')

    const blogPost = await getBlogpost(slug, contentfulLocale);
    if (!blogPost) {
        notFound();
      }
    const {title,content, category, subTitle} = blogPost;
  return (
        <div className='w-full my-10'>
            <Title className='mb-6 relative'>{title}<div className='absolute h-2 w-20 bg-[--cta2] translate-y-1'></div></Title>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 min-h-8 mb-4 gap-4'>
                <p className='font-medium text-black/60'>{subTitle}</p>
                {category && category.length > 0 && (
                    <ul className='w-full flex flex-wrap gap-4 justify-end'>
                        {category.map((cat, index) => (
                            <li className='text-sm text-gray-500 border rounded-full h-fit w-fit py-1 px-4' key={index}>{cat}</li>
                        ))}
                    </ul>
                )}
                

            </div>
            <Separator className='mb-10'/>
            <div className='w-full flex md:flex-row flex-col'>
                <Container variant="small">
                <Headlines content={content} />
                    {content && (
                    <div suppressHydrationWarning className="relative w-full overflow-hidden">
                        <RichTextRenderer richTextContent={content} />
                    </div>
                    )}
                <Separator className='my-5'/>
                <Link href='/blog' className='flex w-fit gap-2 border border-black/80 rounded-full py-2 px-6 mb-5 md:mb-0'>
                    <div className='h-auto flex items-center fill-slate-500'><Icons.arrowLeftBlack/></div>
                    <p className="text-center font-medium text-sm">{t('goback')}</p>
                </Link>
                </Container>
                
                <div className='h-full w-full md:w-[400px] md:sticky md:top-16'>
                    <div className='border-b-2 border-black/80'><Title className='text-lg md:text-xl px-2 py-2 '>{t('related')}</Title></div>
                    <RelatedPostGrid category={category} slug={blogPost.slug}/>
                </div>
            </div>
            
        </div>
  )
}
