import {useTranslations} from 'next-intl';
import PageLayout from './PageLayout';
import { Icons } from '../Icons';
import { Link } from '../../i18n/routing';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <PageLayout>
      <div className='w-full'>
        <section className="h-[calc(100vh-4rem)] pt-10 w-full flex justify-center overflow-hidden">
        <Icons.errline />
        <div className="absolute inset-0 w-full z-10 flex flex-col items-center justify-center px-4 gap-10 text-gray-800">
          <Icons.err/>
          <p className='text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl'>{t('title')}</p>
          <p className='px-5 text-base sm:text-lg lg:text-xl text-center max-w-lg'>{t('description')}
            <Link className='underline text-[--cta]' href={`/`}>{t('home')}</Link>
          </p>
        </div>
        </section>
      </div>
    </PageLayout>
  );
}