import localFont from 'next/font/local';
import { ReactNode } from 'react';

import { ProtectedRoutes } from '@/components/layout/protected-routes/protected-routes';

import './globals.css';

const VTBFonts = localFont({
  src: [
    {
      path: '../../public/fonts/VTBGroupUI-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/VTBGroupUI-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
});

export const metadata = {
  title: 'WatchDog',
  description: 'Приложение WatchDog'
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang='ru' className={VTBFonts.className}>
      <ProtectedRoutes>
        <body>{children}</body>
      </ProtectedRoutes>
    </html>
  );
};

export default RootLayout;
