import {getTranslations, setRequestLocale} from 'next-intl/server';
import PageLayout from '../../../../components/shared/PageLayout';
import Business7 from '../../../../components/pages/03-Businesspage/Business7/Main';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Omit<Props, 'children'>) {
  const {locale}= await params;
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});
  setRequestLocale(locale);
  return {
    title: t('business7').toUpperCase(),
  };
}

export default async function Page({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);


  return (
    <PageLayout>
      <div className="w-full overflow-hidden mb-20">
        <Business7/>
      </div>
    </PageLayout>
  );
}