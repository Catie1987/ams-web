import MakerImage from '@/components/features/MakerImage';
import OptimizedImage from '@/components/features/OptimizedImage';
import Container from '@/components/layouts/Container';
import RichTextRenderer from '@/components/pages/05-Blogpage/RichTextRenderer';
import { Printer, Mail, ArrowDownToLine } from 'lucide-react';
import Title from '@/components/shared/Title';
import { Separator } from '@/components/ui/separator';
import { getProductItem, getProducts } from '@/lib/clients/contentful';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from '@/components/Icons';
import { Link } from '@/i18n/routing';
import RelatedProductGrid from '@/components/pages/04-Productpage/RelatedProduct';

type Params = Promise<{ 
    id: string,
    locale: string,
}>;

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

export async function generateStaticParams(props: {
    params: Params;
}) {
    const locale = await props.params;
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    const productItems = await getProducts({
        locale: contentfulLocale,
    });
    return productItems.map((productItem) => ({
        id: productItem.id!,
    }))
  };

export async function generateMetadata(props: {
    params: Params
  }) {
    const params = await props.params;
    const ProductItem = await getProductItem(params.id);
    if(!ProductItem) {
      
      return;
    }
    const { name, description } = ProductItem;
    return {
      title: name,
      description: description,
    }
  }

export default async function ProductDetailPage(props: {
    params: Params;
}) {
    const params = await props.params;
    setRequestLocale(params.locale);
    const contentfulLocale = params.locale === 'vn' ? 'vi-VN' : 'en-US';
    const id = params.id;
    const t = await getTranslations('ProductPage');

    const productItem = await getProductItem(id, contentfulLocale);
        if (!productItem) {
            notFound();
          }
        const {name, image, description, specification, maker, packing, shelflife, type, functionCollection, tds, sds} = productItem;
        const functions = functionCollection?.items || [];
  return (
    <div className='w-full my-10 flex md:flex-row flex-col'>
        <Container variant="medium">
            <Link href='/product' className='flex w-fit gap-2 border border-black/80 rounded-full py-2 px-6 mb-5'>
                <div className='h-auto flex items-center fill-slate-500'><Icons.arrowLeftBlack/></div>
                <p className="text-center font-medium text-sm">{t('goback')}</p>
            </Link>
            <div className='flex items-center justify-between gap-4'>
                <div className='mb-2'>
                    <Title className='mb-6 relative md:text-2xl text-xl'>{name}
                        <div className='absolute h-2 w-20 bg-[--cta2] translate-y-1'></div>
                    </Title>
                    <div className='flex gap-2 flex-wrap'>
                        <button className='flex items-center w-fit text-sm font-medium hover:text-[--cta2] text-stone-500'><Printer size={18} className='mr-2'/>{t('print')}</button>
                        <button className='flex items-center w-fit text-sm font-medium hover:text-[--cta2] text-stone-500'><Mail size={18} className='mr-2'/>{t('send')}</button>
                    </div>
                </div>
                <div className='h-10 overflow-hidden'>
                       {maker.logo?.url? (<MakerImage alt='' src={maker.logo.url}/>):(
                        <p>{maker.makerName}</p>)}
                    </div>
            </div>
            <Separator/>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='max-w-[600px]'>
                    {productItem?.image? (
                    <OptimizedImage alt={name} src={image.url}/>
                    ) : (
                    <div className='w-full h-full'>no image available</div>
                    )}
                </div>
                <ul className='py-4 flex flex-col gap-4 justify-between'>
                    <li className='flex items-center flex-wrap'>
                        <span className='text-black/60 mr-2'>{t('packing')}</span>
                        {packing? (<p className='font-semibold'>{packing}</p>):(<p className='text-black/60'>{t('noinfo')}</p>)}
                    </li>
                    <li className='flex items-center flex-wrap'>
                        <span className='text-black/60 mr-2'>{t('shelflife')}</span>
                        {shelflife? (<p className='font-semibold'>{shelflife}</p>):(<p className='text-black/60'>{t('noinfo')}</p>)}
                    </li>
                    <li className='flex items-center flex-wrap'>
                        <span className='text-black/60 mr-2'>{t('type')}</span>
                        {type?.title? (<p className='font-semibold'>{type?.title}</p>):(<p className='text-black/60'>{t('noinfo')}</p>)}
                    </li>
                    <li className='flex items-center flex-wrap gap-2'>
                        <span className='text-black/60 mr-2'>{t('function')}</span>
                        {functions.length ? ( 
                        <div className='flex gap-2 flex-wrap'> 
                        {functions.map((func, index) => (
                            <p key={index} className='text-sm font-semibold border py-1 px-3 rounded-full bg-gray-100'>{func.title}</p> 
                            ))} 
                        </div> ) : ( 
                            <p className='text-black/60'>{t('nofunction')}</p> 
                        )}
                    </li>
                </ul>
            </div>
            <div className='w-full bg-white'>
                <Tabs defaultValue="des" className="w-full">
                    <TabsList className='border-t-0 sm:border-t'>
                    <TabsTrigger value="des">{t('description')}</TabsTrigger>
                    <TabsTrigger value="spec">{t('spec')}</TabsTrigger>
                    <TabsTrigger value="info">TDS/SDS</TabsTrigger>
                    </TabsList>
                    <div className='py-4 w-full min-h-64'>
                    <TabsContent value="des" className=''>
                        {description ? <RichTextRenderer richTextContent={description} /> : 'N/A'}
                    </TabsContent>
                    <TabsContent value="spec" className=''>
                        {specification ? <RichTextRenderer richTextContent={specification} /> : 'N/A'}
                    </TabsContent>
                    <TabsContent value="info" className='flex flex-col gap-4'>
                        {tds ? (
                            <a href={tds} className='group flex items-center gap-2 border rounded-md w-fit pl-4 overflow-hidden'>
                                <p className='text-black/80 group-hover:text-black group-hover:underline group-hover:underline-offset-2 line-clamp-1'>{`TDS_${id}`}</p>
                                <div className='text-white bg-[--cta2] h-10 w-10 place-items-center place-content-center'><ArrowDownToLine size={18}/></div>
                            </a>
                            ):(
                            <p className='text-sm text-black/50'>{t('nofile')}</p>
                        )}
                        {sds ? (
                            <a href={sds} className='group flex items-center gap-2 border rounded-md w-fit pl-4 overflow-hidden'>
                                <p className='text-black/80 group-hover:text-black group-hover:underline group-hover:underline-offset-2 line-clamp-1'>{`SDS_${id}`}</p>
                                <div className='text-white bg-[--cta2] h-10 w-10 place-items-center place-content-center'><ArrowDownToLine size={18}/></div>
                            </a>
                            ):(
                            <p className='text-sm text-black/50'>{t('nofile')}</p>
                        )}
                    </TabsContent>
                    </div>
                </Tabs>
        </div>
        </Container>
        <div className='w-full basis-1/4 min-w-72'>
            <div className='border-b-2 border-black/80'><Title className='text-lg md:text-xl px-2 py-2 '>{t('related')}</Title></div>
            <RelatedProductGrid typeTitle={type?.title || ''} id={productItem.id}/>
        </div>
    </div>
  )
}
