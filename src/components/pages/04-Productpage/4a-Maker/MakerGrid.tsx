import React from 'react';
import { getLocale } from 'next-intl/server';
import { getMakers } from '../../../../lib/clients/contentful';
import { MakerDetail } from '../../../../lib/types';
import MarkerName from './MarkerName';


const MakerGrid = async ({letterGroup}: {letterGroup: string}) => {
    const locale = await getLocale();
    const Makers = await getMakers();

    function categorizeItems(items: any[], letterGroup: string) {
        const firstLetters = letterGroup.split(' ');
        return items.filter(item => {
            const firstChar = item.makerName.charAt(0).toUpperCase();
            if (letterGroup.includes('#') && /\d/.test(firstChar)) {
                return true;
            }
            return firstLetters.includes(firstChar);
        });
    }

    const categorizedMakers = categorizeItems(Makers, letterGroup);

    if (categorizedMakers.length > 0) {
        return (
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full gap-5'>
                {categorizedMakers.map((maker: MakerDetail, idx: number) => (
                    <MarkerName key={idx} makerDetail={maker} locale={locale} index={idx}/>
                ))}
            </ul>
        )
    } else {
        return null;
    }
}

export default MakerGrid;
