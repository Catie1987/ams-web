import AnimatedLine from '@/components/features/AnimatedLine';
import AnimatedTitle from '@/components/features/AnimatedTitle';
import FirstPra from '@/components/pages/02-Aboutpage/2a-Overview/FirstPra';
import SecondPra from '@/components/pages/02-Aboutpage/2a-Overview/SecondPra';
import Title from '@/components/shared/Title';
import { Locale } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: Locale }>;
  };
  export async function generateMetadata({
    params,
  }: Props) {
    const {locale}= await params;
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});
    return {
      title: t('overview'),
      description: t('overview-des')
    };
  }
export default async function Page({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('OverviewPage')
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
      </div>
    )
}