import React from 'react';
import { getLocale } from 'next-intl/server';
import { getFunctions } from '@/lib/clients/contentful';
import { FunctionDetail } from '@/lib/types';
import FunctionName from './FunctionName';

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

const FunctionGrid = async ({letterGroup}: {letterGroup: string}) => {
    const locale = await getLocale();
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    const Functions = await getFunctions(
        contentfulLocale,
    );
    function categorizeItems(items: any[], letterGroup: string) {
        const firstLetters = letterGroup.split(' ');
        return items.filter(item => {
            const firstChar = item.title.charAt(0).toUpperCase();
            if (letterGroup.includes('#') && /\d/.test(firstChar)) {
                return true;
            }
            return firstLetters.includes(firstChar);
        });
    };
    const categorizedFunctions = categorizeItems(Functions, letterGroup);
    if (categorizedFunctions.length > 0) {
        return (
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full gap-5'>
                {categorizedFunctions.map((func: FunctionDetail, idx: number) => (
                    <FunctionName key={idx} functionDetail={func} locale={locale} index={idx} />
                ))}
            </ul>
        )
    } else {
        return null;
    }
}

export default FunctionGrid;