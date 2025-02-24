import {getTranslations, setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/shared/PageLayout';
import { getFunctions, getMakers, getProductTypes, getTotalProducts } from '@/lib/clients/contentful';
import ProductsGrid from '@/components/pages/04-Productpage/ProductGrid';
import Search from '@/components/features/search';
import Title from '@/components/shared/Title';
import { Separator } from '@/components/ui/separator';
import ProductPagination from '@/components/pages/04-Productpage/ProductPagination';
import SelectType from '@/components/pages/04-Productpage/SelectType';
import { Suspense } from 'react';
import LoadingFallback from '@/components/shared/LoadingFallback';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import BreadCrumb from '@/components/layouts/BreadCrumb';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{
    query?: string;
    page?: string;
    maker?: string;
    type?: string;
    functionCollection?: string;
  }>;
};

const localeMap: { [key: string]: string } = { en: 'en-US', vn: 'vi-VN', };


export async function generateMetadata({
  params,
}: Omit<Props, 'children'>) {
  const {locale}= await params;
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});
  setRequestLocale(locale);
  return {
    title: t('product'),
    description: t('product-des')
  };
}


export default async function Page({params, searchParams}: Props) {
 const searchParamsResolved = await searchParams;
   const query = searchParamsResolved?.query || '';
   const maker = decodeURIComponent(searchParamsResolved?.maker || '');
   const makerNames = maker.split(',');
   const type = decodeURIComponent(searchParamsResolved?.type || '');
   const productTypes = type.split(',');
   const functionCollection = decodeURIComponent(searchParamsResolved?.functionCollection || '');
   const functionTitles = functionCollection.split(',');
   const {locale} = await params;
   setRequestLocale(locale);
   const mappedLocale = localeMap[locale] || 'en-US';
   const currentPage = Number(searchParamsResolved?.page) || 1; 
   const postsPerPage = 10;
   const [totalProducts, makers, types, functions] = await Promise.all([ 
    getTotalProducts({ query, makerNames, productTypes, functionTitles }), 
    getMakers(), 
    getProductTypes(mappedLocale),
    getFunctions(mappedLocale),
  ]);

   const totalPages = Math.ceil(totalProducts / postsPerPage);
   const startIndex = (currentPage - 1) * postsPerPage + 1;
   const endIndex = Math.min(currentPage * postsPerPage, totalProducts);
   const t = await getTranslations('ProductPage');

  return (
    <PageLayout>
      <div className='w-full gap-4 grid grid-cols-1 md:grid-cols-2 mb-4'>
        <div>
          <Title className='text-[--cta2]'>{t('pagetitle')}</Title>
          <p className='text-black/60'>{t('subtitle')}</p>
        </div>
        <div className='w-full flex items-center justify-center md:justify-end'>
          <Button size={'xl'} className='md:w-fit max-w-[500px] font-light w-full text-base md:text-lg'>
            <Mail className='mr-2'/>
            {t('send2')}
          </Button>
        </div>
      </div>
      
      <div className="w-full flex flex-col md:flex-row">
        <div className='w-full md:w-96 mt-10 mr-4 mb-4'>
          <Search placeholder={t('search')}/>
          <SelectType 
          makerList={makers} initialMakers={makerNames} 
          productTypes={types} initialTypes={productTypes} 
          functionList={functions} initialFunctions={functionTitles} />
        </div>
        <Separator orientation="vertical" className='hidden md:block' />
        <div className='w-full flex flex-col'>
          <div className='pl-4 my-2 flex flex-wrap gap-4 items-center justify-between'>
            <div className='w-auto block text-black/60 md:text-base text-sm'>
              <span>{t("show")}
                <span className='font-semibold text-[--cta2]'> {startIndex} - {endIndex}</span> {t('oftotal')} 
                <span className='font-semibold text-[--cta2]'> {totalProducts}</span>
              </span>
            </div>
            <div className="h-fit block items-center">
              <ProductPagination totalPages={totalPages}/>
            </div>
          </div>
          <Separator/>
          <Suspense fallback={<LoadingFallback/>}>
            <ProductsGrid page={currentPage} postsPerPage={postsPerPage} query={query} maker={maker} type={type} functionCollection={functionCollection}/>
          </Suspense>
        </div>
      </div>
    </PageLayout>
  );
}