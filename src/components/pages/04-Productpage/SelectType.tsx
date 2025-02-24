"use client";
import React, { FC, useEffect, useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion-custom";
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { FilterX } from 'lucide-react';
import { FunctionDetail, MakerDetail, TypeDetail } from '@/lib/types';
import CheckboxItems from './CheckboxItems';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


interface SelectTypeProps {
    makerList: MakerDetail[];
    initialMakers: string[];
    productTypes: TypeDetail[];
    initialTypes: string[];
    functionList: FunctionDetail[];
    initialFunctions: string[];
}

const SelectType: FC<SelectTypeProps> = ({
    makerList,
    initialMakers,
    productTypes,
    initialTypes,
    initialFunctions,
    functionList,
}) => {
    const t = useTranslations('ProductPage');
    const methods = useForm({
        defaultValues: {
            makers: initialMakers,
            types: initialTypes,
            functions: initialFunctions,
        }
    });

    const searchParams = useSearchParams(); 
    const pathname = usePathname();
    const { replace } = useRouter();
    const { reset, watch } = methods;
    const [isButtonDisabled, setIsButtonDisabled] = useState(initialMakers.length === 1 && initialTypes.length === 1 && initialFunctions.length === 1);

    const handleFilterChange = useDebouncedCallback(() => { 
      const makers = watch('makers');
      const types = watch('types');
      const functions = watch('functions');
        const params = new URLSearchParams(searchParams); 
        if (makers.length > 1) { 
            params.set('maker', makers.join(',')); 
        } else { 
            params.delete('maker'); 
        }
        if (types.length > 1) {
          params.set('type', types.join(',')); 
        } else {
          params.delete('type');
        }
        if (functions.length > 1) {
          params.set('functionCollection', functions.join(','));
        } else {
          params.delete('functionCollection')
        }
         replace(`${pathname}?${params.toString()}`); 
    }, 300);

    const handleClearFilter = () => { 
      reset({ makers: [], types: [], functions: [] }); 
      handleFilterChange(); 
    };

    useEffect(() => {
      const subcription = watch((values) => {
        setIsButtonDisabled(values.makers?.length === 1 && values.types?.length === 1 && values.functions?.length === 1);
      })
      return () => subcription.unsubscribe();
    }, [watch]);
    const uniqueProductTypes = Array.from(new Set(productTypes.map(type => type.category)));
  return (
    <Accordion type="single" collapsible className="w-full mt-4">
        <div className='flex items-center justify-between'>
            <p>{t('filter')}</p>
            <Button variant={'outline'} onClick={handleClearFilter} disabled={isButtonDisabled}>
              <div className='mr-2'>{t('clearfilter')}</div><FilterX size={18}/>
            </Button>
        </div>
      <AccordionItem value="item-1" className='mt-4'>
        <AccordionTrigger>{t('bymaker')}</AccordionTrigger>
        <AccordionContent>
            <FormProvider {...methods}> 
                <form className="space-y-8"> 
                    <ul className='flex flex-col gap-2'> 
                        {makerList.map((maker, index) => ( 
                        <CheckboxItems 
                        key={index} name="makers" 
                        value={maker?.makerName} 
                        label={maker?.makerName} 
                        onChange={() => handleFilterChange()}
                        /> ))} 
                    </ul> 
                </form> 
            </FormProvider>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>{t('bytype')}</AccordionTrigger>
        <AccordionContent>
            <FormProvider {...methods}> 
                <form className="space-y-8"> 
                    <ul className='flex flex-col gap-2'> 
                        {uniqueProductTypes.map((category, index) => ( 
                        <CheckboxItems 
                        key={index} name="types" 
                        value={category} 
                        label={category} 
                        onChange={() => handleFilterChange()}
                        /> ))} 
                    </ul> 
                </form> 
            </FormProvider>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>{t('byfunction')}</AccordionTrigger>
        <AccordionContent>
            <FormProvider {...methods}> 
              <form className="space-y-8"> 
                  <ul className='flex flex-col gap-2'> 
                    {functionList.map((funtion, index) => ( 
                    <CheckboxItems 
                    key={index} name="functions" 
                    value={funtion?.title} 
                    label={funtion?.title} 
                    onChange={() => handleFilterChange()}
                    /> ))} 
                  </ul> 
              </form> 
            </FormProvider>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};
export default SelectType;
