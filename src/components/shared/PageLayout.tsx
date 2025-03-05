import {useTranslations} from 'next-intl';
import {ReactNode} from 'react';
import Container from '../../components/layouts/Container';

type Props = {
  children?: ReactNode;
  banner?: ReactNode;
};

export default function PageLayout({children, banner}: Props) {
  const t = useTranslations('PageLayout');

  return (
    <div className="w-full relative flex grow flex-col">
      {banner}
      <div className="w-full relative flex grow flex-col">
        <Container variant='large' className="mt-6 tracking-[0.03em]">
          {children}
        </Container>
      </div>
    </div>
  );
}