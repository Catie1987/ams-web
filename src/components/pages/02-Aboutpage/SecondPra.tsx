"use client"
import { useTranslations } from 'next-intl';
import {motion} from "framer-motion";
import React, { ReactNode, useState } from 'react';
import { Diamond } from 'lucide-react';
import Title from '../../../components/shared/Title';
import { useIsMobile } from '../../../lib/hooks/useIsMobile';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import AnimatedTitle from '../../../components/features/AnimatedTitle';
import AnimatedLine from '../../../components/features/AnimatedLine';

interface WhyListProps {
    icon: ReactNode;
    title: string;
    description: string;
};

export const WhyList = ():WhyListProps[] => [
    {
        icon: "A",
        title: "dvanced",
        description: "why1"
    },
    {
        icon: "M",
        title: "aterials",
        description: "why2"
    },
    {
        icon: "S",
        title: "olution",
        description: "why3"
    }
]

export default function SecondPra() {
    const t = useTranslations('AboutPage');
    const whys = WhyList();
    const [activeTab, setActiveTab] = useState(0);
    const isMobile = useIsMobile();
    
    return (
        <div className='w-full mt-20'>
            <Title className='relative mb-10'>
                <div className='relative w-fit py-1'>{t('why')}
                <AnimatedTitle/>
                </div>
                <AnimatedLine height={'8px'} width={'80px'}/>
            </Title>
            {!isMobile &&
            <div className='w-full'>
                <motion.div
                className="w-[calc(100%-0.8em)] flex mb-auto justify-center"
                >
                    <div className="flex gap-10 w-full">
                        <ul className="flex flex-col gap-2 basis-2/5">
                        {whys.map((why, index) => (
                            <button
                            key={index}
                            className={`group relative inline-flex items-center w-full p-4 pb-6 text-left text-xl font-semibold border-b
                            ${activeTab === index ? 'text-opacity-100 border-opacity-80' : 'text-opacity-35 border-opacity-20'}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <div className={`${activeTab === index ? 'opacity-100': 'opacity-50'}
                                group-hover:opacity-100 opacity-50 border border-transparent rounded-md h-10 w-10 flex items-center justify-center bg-[--cta2] text-white shadow-md`}>{why.icon}</div>
                            <span className={`${activeTab === index ? 'opacity-100': 'opacity-50'} group-hover:opacity-100 opacity-50 ml-1`}>{why.title}</span>
                            <div className="absolute translate-x-[52px] right-0 -translate-y-[68%] top-1/2">{activeTab === index ? <Diamond fill='#9ca3af' className='text-gray-400'/>: ''}</div>
                        </button>
                        ))}
                        </ul>
                        <Title 
                        className="pl-24 p-6 border-l border-gray-400 border-opacity-20 text-gray-800 w-full flex items-center text-3xl font-bold">
                            <motion.p key={activeTab} className='pl-24'
                            initial={{ y: "20%" , opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            viewport={{ once: true }} 
                            transition={{ duration: 0.3 }}>{t(whys[activeTab].description)}
                            </motion.p>
                        </Title>
                    </div>
                </motion.div>
            </div>}
            {isMobile && 
            <div className=" w-[calc(100%-0.8em)] h-full">
            <Accordion type="single" collapsible className="w-full">
              {whys.map((why, index) => (
                <AccordionItem key={index} value={`item-${index}`} >
                    
                    <AccordionTrigger>
                        <div className='flex items-center group'>
                            <div className={`
                            text-3xl border border-transparent rounded-md h-12 w-12 flex items-center justify-center bg-[--cta2] text-white shadow-md`}>
                                {why.icon}
                            </div>
                            <p className="ml-1 text-2xl font-bold text-start">{why.title}</p>
                        </div>
                    </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-base font-normal text-gray-800">{t(why.description)}</p>
                      </AccordionContent>
                </AccordionItem>
                  
              
                ))} 
            </Accordion>
          </div>
            }
        </div>
    )
}
