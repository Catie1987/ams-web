import PageLayout from '@/components/shared/PageLayout';
import Banner from '@/components/pages/01-Homepage/Banner';
import { setRequestLocale } from 'next-intl/server';
import FirstPra from '@/components/pages/01-Homepage/FirstPra';
import SecondPra from '@/components/pages/01-Homepage/SecondPra';
import ThirdPra from '@/components/pages/01-Homepage/ThirdPra';
import FourthPra from '@/components/pages/01-Homepage/FourthPra';
import Customers from '@/components/pages/01-Homepage/Customers';

type Props = {
  params: {locale: string};
};

export default async function IndexPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);


  return (
    <PageLayout banner={<Banner/>}>  
      <div className='w-full min-h-screen pt-8 pb-20'>
        <FirstPra/>
        <SecondPra/>
        <ThirdPra/>
        <FourthPra/>
        <Customers/>
      </div>
    </PageLayout>
  );
}