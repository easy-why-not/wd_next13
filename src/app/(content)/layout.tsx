import { ReactNode } from 'react';

import { Footer } from '@/components/layout/footer/footer';
import { Header } from '@/components/layout/header/header';
import { Navigation } from '@/components/layout/navigation/navigation';

import styles from './layout.module.css';

export const metadata = {
  title: 'WatchDog',
  description: 'Приложение WatchDog'
};

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Navigation />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
