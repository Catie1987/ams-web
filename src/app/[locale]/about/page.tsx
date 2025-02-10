import {getTranslations, setRequestLocale} from 'next-intl/server';
import FirstPra from '@/components/pages/02-Aboutpage/FirstPra';
import SecondPra from '@/components/pages/02-Aboutpage/SecondPra';
import ThirdPra from '@/components/pages/02-Aboutpage/ThirdPra';
import Title from '@/components/shared/Title';
import AnimatedTitle from '@/components/features/AnimatedTitle';
import AnimatedLine from '@/components/features/AnimatedLine';

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
  const t = await getTranslations('AboutPage');

  return (
      <div className="w-full pt-8 pb-20">
        <Title className='relative mb-10'>
            <div className='relative w-fit py-1'>{t('intro')}
            <AnimatedTitle/>
            </div>
            <AnimatedLine height={'8px'} width={'80px'}/>
        </Title>
        <FirstPra/>
        <SecondPra/>
        <ThirdPra/>
      </div>
  );
}