'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { logoNavClose, mainLogo } from '@/public';
import { CustomLink } from '@/src/components/modules/Navigation/CustomLink/CustomLink';
import { useDisclosure } from '@/src/hooks';

import { navData } from './nav.data';

import styles from './navigation.module.css';

export const Navigation: FC = () => {
  const { isOpen, open, close } = useDisclosure();

  return (
    <nav
      className={cn(styles.main, { [styles.main_open]: isOpen })}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <div className={styles.image}>
        {isOpen ? (
          <Image priority src={mainLogo} alt='Логотип' width={94} height={94} />
        ) : (
          <Image
            src={logoNavClose}
            alt='Логотип'
            width={24}
            height={53}
            priority
          />
        )}
      </div>

      <ul className={cn(styles.list, { [styles.list_open]: isOpen })}>
        {navData.map((item) => (
          <CustomLink item={item} openMenu={isOpen} key={item.id} />
        ))}
      </ul>
    </nav>
  );
};
