import { ReactNode } from 'react';

import { Footer, Header, Navigation } from '@/src/components/modules';

export const metadata = {
  title: 'WatchDog',
  description: 'Приложение WatchDog'
};

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default ContentLayout;
