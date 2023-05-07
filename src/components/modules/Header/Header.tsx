import Image from 'next/image';

import { user } from '@/public';

import styles from './header.module.scss';

export const Header = (): JSX.Element => (
  <header className={styles.main}>
    <Image src={user} alt='Иконка перехода в ЛК' width={20} height={20} />
  </header>
);
