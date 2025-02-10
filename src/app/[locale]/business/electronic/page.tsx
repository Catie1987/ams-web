import {getTranslations, setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/shared/PageLayout';
import Business5 from '@/components/pages/03-Businesspage/Business5/Main';

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
    title: t('business5').toUpperCase(),
  };
}

export default async function Page({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);


  return (
    <PageLayout>
      <div className="w-full overflow-hidden mb-20">
        <Business5/>
      </div>
    </PageLayout>
  );
}