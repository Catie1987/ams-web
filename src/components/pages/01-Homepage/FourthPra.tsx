import React from 'react';
import { useTranslations } from 'next-intl';
import { Rss } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs2";
import Link from 'next/link';
import BlogList from './BlogList';
import BlogIntro from './BlogIntro';

export default function FourthPra() {
    const t = useTranslations('HomePage.FourthPra');
    
  return (
    <div className='w-full min-h-screen overflow-hidden mt-20 flex md:flex-row flex-col gap-20'>
        <BlogIntro/>
        <div className='basis-2/3 h-full '>
            <Tabs defaultValue="new" className="w-full">
                <div className='flex w-full flex-wrap-reverse gap-y-10'>
                    <TabsList className='w-fit'>
                        <TabsTrigger value="new">{t('trigger1')}</TabsTrigger>
                        <TabsTrigger value="pick">{t('trigger2')}</TabsTrigger>
                    </TabsList>
                    <Link href="/rss" className='ml-auto text-[--cta2] font-semibold inline-flex w-fit items-center'>
                        <Rss size={18}/>
                        <p className='ml-1 text-sm'>RSS feeds</p>
                    </Link>
                </div>
                <TabsContent value='new' className=''>
                    <BlogList pick={false}/>
                </TabsContent>
                <TabsContent value='pick' className=''>
                    <BlogList pick={true}/>
                </TabsContent>
            </Tabs>
                
        </div>
    </div>
  )
}
