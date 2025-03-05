import React from 'react';
import { getLocale } from 'next-intl/server';
import { Separator } from '../../../../components/ui/separator';
import FunctionGrid from './FunctionGrid';

const letters = [
    {
        list: "# A B C"
    },
    {
        list: "D E F"
    },
    {
        list: "G H I"
    },
    {
        list: "J K L"
    },
    {
        list: "M N O"
    },
    {
        list: "P Q R"
    },
    {
        list: "S T U"
    },
    {
        list: "V W X Y Z"
    }
];

export default async function GroupFunction() {
  return (
    <div className='mt-20 w-full'>
        <div className='w-full flex flex-col'>
            {letters.map((letter,idx)=> (
                <div key={idx} className='w-full'>
                    <p className='font-black text-2xl md:text-3xl lg:text-4xl mb-4'>{letter.list}</p>
                    <Separator/>
                    <div className='mt-4 mb-10'>
                        <FunctionGrid letterGroup={letter.list}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
