import {getTranslations, setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/shared/PageLayout';
import Business8 from '@/components/pages/03-Businesspage/Business8/Main';

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
    title: t('business8').toUpperCase(),
  };
}

export default async function Page({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);


  return (
    <PageLayout>
      <div className="w-full overflow-hidden mb-20">
        <Business8/>
      </div>
    </PageLayout>
  );
}