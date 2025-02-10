'use client';

import {useParams} from 'next/navigation';
import { ReactNode, useTransition} from 'react';
import {Locale, usePathname, useRouter} from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslations } from 'next-intl';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: ReactNode;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations('LocaleSwitcher');

  function onSelectChange(value: string) {
    const nextLocale = value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
      
    });
  }

  return (
    <Select onValueChange={onSelectChange} defaultValue={defaultValue} disabled={isPending}>
      <SelectTrigger className="w-24">
      <SelectValue>{label}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t('label')}</SelectLabel>
            {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}