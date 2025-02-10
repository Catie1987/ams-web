import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { SelectItem } from "@/components/ui/select";
import { Icons } from '../Icons';

const locales = [ 
  { locale: 'en', 
    label: 'English', 
    flag: <Icons.enflag/>,
    title: 'EN'
  }, 
  { 
    locale: 'vn', 
    label: 'Vietnamese', 
    flag: <Icons.vnflag/>,
    title: 'VN'
  }
];

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const currentLocale = locales.find(l => l.locale === locale);

  return currentLocale ? (
    <LocaleSwitcherSelect 
      defaultValue={currentLocale.locale}
      label={<div className='flex w-full items-center text-gray-800 gap-2 font-medium'>
        {currentLocale.flag}{currentLocale.title} 
        </div>}
      >
      {locales.map(({ locale, flag }) => (
        <SelectItem key={locale} value={locale}>
          <div className='w-full flex gap-2'>
          {flag} {t('locale',  {locale: locale})}
          </div>
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  ) : null;
}