
import { Locale } from '../../../../i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import FirstPra from '../../../../components/pages/02-Aboutpage/2b-Principle/FirstPra';
import SecondPra from '../../../../components/pages/02-Aboutpage/2b-Principle/SecondPra';

type Props = {
    params: Promise<{ locale: Locale }>;
  };
  export async function generateMetadata({
    params,
  }: Props) {
    const {locale}= await params;
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});
    return {
      title: t('principle'),
      description: t('principle-des')
    };
  }
export default async function Page({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('PrinciplePage')
    return (
      <div className="w-full pb-20">
        <FirstPra/>
        <SecondPra/>
      </div>
    )
}