import React from 'react';
import { useTranslations } from 'next-intl';
import Title from '../../../../components/shared/Title';
import AnimatedTitle from '../../../../components/features/AnimatedTitle';
import AnimatedLine from '../../../../components/features/AnimatedLine';

export default function SecondPra() {
    const t = useTranslations('VisionPage');
    const items = [
        {
            number: "01",
            title: t("title1"),
            des: t("des1")
        },
        {
            number: "02",
            title: t("title2"),
            des: t("des2")
        },
        {
            number: "03",
            title: t("title3"),
            des: t("des3")
        },
        {
            number: "04",
            title: t("title4"),
            des: t("des4")
        },
        {
            number: "05",
            title: t("title5"),
            des: t("des5")
        },
    ];
  return (
    <div className='w-full mt-20'>
        <Title className='relative mb-10'>
                <div className='relative w-fit py-1'>{t('intro2')}
                <AnimatedTitle/>
                </div>
                <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
        <div className='w-full'>
            <p className='mb-20'>{t('policy')}</p>
        </div>
        <Title className='relative mb-10'>
                <div className='relative w-fit py-1'>{t('intro3')}
                <AnimatedTitle/>
                </div>
                <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
        <ul className='w-full mt-10 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-1'>
            {items.map((item, idx) => (
               <li key={idx} className={`w-full bg-[#dfedfa] flex flex-col items-center py-8 px-4 lg:col-span-1 
               ${idx===3 || idx ===4 ? 'md:col-span-3' : 'md:col-span-2' }`}>
                    <div className='relative'>
                        <Title className="text-2xl text-[#2F509F]">{item.number}</Title>
                        <div className='absolute left-[15%] w-[70%] h-[2px] bg-[#2F509F]'></div>
                    </div>
                    <Title className='text-base md:text-xl text-center mt-4 text-[#2F509F]'>{item.title}</Title>
                    <p className='text-sm mt-4 text-center'>{item.des}</p>
                </li> 
            ))}
            
        </ul>
    </div>
  )
}
