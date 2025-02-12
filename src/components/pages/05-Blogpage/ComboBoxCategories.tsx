'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useTranslations } from 'next-intl';
import { Locale } from '@/i18n/routing';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const categoriesByLocale = {
  en: [
    { value: 'Automotive', label: 'Automotive' },
    { value: 'Speaker', label: 'Speaker' },
    { value: 'Camera Module', label: 'Camera Module' },
    { value: 'Semiconductor', label: 'Semiconductor' },
    { value: 'Electronic Industry', label: 'Electronic Industry' },
    { value: 'Medical', label: 'Medical' },
    { value: 'Battery Energy', label: 'Battery Energy' },
    { value: 'Construction', label: 'Construction' },
  ],
  vn: [
    { value: 'Xe Hơi', label: 'Xe Hơi' },
    { value: 'Loa & Tai Nghe', label: 'Loa & Tai Nghe' },
    { value: 'Mô đun Máy ảnh', label: 'Mô đun Máy ảnh' },
    { value: 'Chất Bán Dẫn', label: 'Chất Bán Dẫn' },
    { value: 'Ngành Điện Tử', label: 'Ngành Điện Tử' },
    { value: 'Thiết Bị Y Tế', label: 'Thiết Bị Y Tế' },
    { value: 'Pin & Năng Lượng', label: 'Pin & Năng Lượng' },
    { value: 'Xây Dựng', label: 'Xây Dựng' },
  ],
};

interface SelectCategoryProps {
  locale: Locale;
  selectvalue: string;
}

export function SelectCategory({ locale, selectvalue }: SelectCategoryProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectvalue);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const t = useTranslations('BlogPage');

  const categories = categoriesByLocale[locale];

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? '' : currentValue;
    setValue(newValue);
    setOpen(false);

    const params = new URLSearchParams(searchParams);
    if (newValue) {
      params.set('category', newValue);
    } else {
      params.delete('category');
    }
    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full max-w-[450px] h-10 justify-between"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : t('select')}
          <ChevronsUpDown className="opacity-50" size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] sm:w-[450px] p-0">
        <Command>
        <CommandInput placeholder={t('select')} className="h-9" />
          <CommandList>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={handleSelect}
                >
                  {category.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === category.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
              <CommandSeparator className='my-1'/>
              <CommandItem value="clear" onSelect={() => handleSelect('')} className='font-semibold'>
                 {t('clear')} 
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
