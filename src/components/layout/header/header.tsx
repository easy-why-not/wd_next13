import Image from 'next/image';

import styles from './header.module.css';

export const Header = (): JSX.Element => (
  <header className={styles.header}>
    <Image
      src='/images/navIcons/user.svg'
      alt='Иконка перехода в ЛК'
      width={20}
      height={20}
    />
  </header>
);
