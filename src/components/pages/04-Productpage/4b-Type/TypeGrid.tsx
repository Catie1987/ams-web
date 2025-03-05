import React from 'react';
import { getFilterProductTypes } from '../../../../lib/clients/contentful';
import TypeName from './TypeName';
import { getLocale } from 'next-intl/server';
import { TypeDetail } from '../../../../lib/types';

const localeMap: { [key: string]: string } = { 
    en: 'en-US', 
    vn: 'vi-VN', 
};

interface TypeProps {
    category: string;
    typeNames: TypeDetail[];
}

const TypeGrid: React.FC<TypeProps> = async ({typeNames }) => {
    const locale = await getLocale();
    return (
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full gap-5'>
            {typeNames.map((type, idx) => (
                <TypeName key={idx} typeDetail={type} locale={locale} index={idx}/>
            ))}
        </ul>
    );
};

const AsyncTypeGridWrapper: React.FC<{ category: string }> = async ({ category }) => {
    const locale = await getLocale();
    const contentfulLocale = localeMap[locale as unknown as string] || 'en-US';
    const typeNames = await getFilterProductTypes(contentfulLocale, category);
    return <TypeGrid category={category} typeNames={typeNames} />;
};

export default AsyncTypeGridWrapper;
