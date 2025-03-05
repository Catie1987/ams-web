import {getTranslations, setRequestLocale} from 'next-intl/server';
import PageLayout from '../../../components/shared/PageLayout';
import LandingPage from '../../../components/pages/03-Businesspage/LandingPage';
import Service from '../../../components/pages/03-Businesspage/Service';
import BusinessField from '../../../components/pages/03-Businesspage/BusinessField';
import { Locale } from '../../../i18n/routing';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: Omit<Props, 'children'>) {
  const {locale}= await params;
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});
  setRequestLocale(locale);
  return {
    title: t('business').toUpperCase(),
  };
}

export default async function Page({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);


  return (
    <PageLayout>
      <div className="w-full overflow-hidden mb-20">
        <LandingPage/>
        <Service/>
        <BusinessField/>
      </div>
    </PageLayout>
  );
}