'use client';

import {useTranslations} from 'next-intl';
import {useEffect} from 'react';
import PageLayout from '@/components/shared/PageLayout';
import Title from '@/components/shared/Title';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({error, reset}: Props) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout>
      <div className='w-full h-screen flex flex-col justify-center'>
        <div className='text-8xl font-thin text-[--cta2]'>500</div>
        <Title>{t('internal')}</Title>
        {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          retry: (chunks) => (
            <button
              className="text-[--cta2] underline underline-offset-2"
              onClick={reset}
              type="button"
            >
              {chunks}
            </button>
          )
        })}
        {t.rich('home', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          retry: (chunks) => (
            <button
              className="text-[--cta2] underline underline-offset-2"
              onClick={reset}
              type="button"
            >
              {chunks}
            </button>
          )
        })}
      </div>
    </PageLayout>
  );
}