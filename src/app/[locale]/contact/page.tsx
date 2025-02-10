import {getTranslations, setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/shared/PageLayout';
import GoogleMap from '@/components/pages/06-Contactpage/GoogleMap';
import Title from '@/components/shared/Title';
import ContactDetail from '@/components/pages/06-Contactpage/ContactDetail';
import ContactForm from '@/components/pages/06-Contactpage/ContactForm';

type Props = {
  params: {locale: string};
};

export async function generateMetadata({
  params,
}: Omit<Props, 'children'>) {
  const {locale}= await params;
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});
  setRequestLocale(locale);
  return {
    title: t('about'),
    description: t('about-des')
  };
}

export default async function Page({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ContactPage');

  return (
    <PageLayout>
      <div className="w-full mb-20">
        <div className='w-full flex flex-col gap-4'>
          <Title className='relative mb-4'>{t('map')}
            <div className='absolute h-2 w-20 bg-[--cta2] translate-y-1'></div>
          </Title>
          <GoogleMap/>
        </div>
        <div className='w-full mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
          <ContactDetail/>
          <ContactForm/>
        </div>
      </div>
    </PageLayout>
  );
}