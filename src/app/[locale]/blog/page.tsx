import {getTranslations, setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/shared/PageLayout';
import Search from '@/components/features/search';
import { Separator } from '@/components/ui/separator';
import BlogPagination from '@/components/pages/05-Blogpage/BlogPagination';
import { getTotalBlogPosts } from '@/lib/clients/contentful';
import { SelectCategory } from '@/components/pages/05-Blogpage/ComboBoxCategories';
import { Locale } from '@/i18n/routing';
import BlogPostsGridSuspense from '@/components/pages/05-Blogpage/BlogPostGrid';

type Props = {
  params: {locale: string};
  searchParams?: Promise<{
    query?: string;
    page?: string;
    category?: string;
  }>;
};

export async function generateMetadata({
  params,
}: Omit<Props, 'children'>) {
  const {locale}= await params;
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});
  setRequestLocale(locale);
  return {
    title: t('blog'),
    description: t('product-des')
  };
}


export default async function Page({params, searchParams}: Props) {
  const searchParamsResolved = await searchParams;
  const query = searchParamsResolved?.query || '';
  const category = decodeURIComponent(searchParamsResolved?.category || '');
  const categoryTitles = category.split(',');
  const {locale} = await params;
  setRequestLocale(locale);
  const currentPage = Number(searchParamsResolved?.page) || 1; 
  const postsPerPage = 6;
  const totalPosts = await getTotalBlogPosts({query, category: categoryTitles}); 
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const t = await getTranslations('BlogPage');

  return (
    <PageLayout>
      <div className="w-full">
        <div className='w-full mb-4 grid grid-cols-1 md:grid-cols-2 justify-between gap-4'>
          <div className='h-10 max-w-[450px]'>
            <Search placeholder={t('search')}/>
          </div>
          <div className='h-10 w-full flex justify-start md:justify-end'>
            <SelectCategory locale={locale as Locale} selectvalue={category}/>
          </div>
        </div>
        <Separator className='mb-4 md:mb-10'/>
      
        <BlogPostsGridSuspense page={currentPage} postsPerPage={postsPerPage} query={query} category={categoryTitles}/>
      
      <div className="mt-5 flex w-full justify-center">
        <BlogPagination totalPages={totalPages} />
      </div>
      </div>
    </PageLayout>
  );
}