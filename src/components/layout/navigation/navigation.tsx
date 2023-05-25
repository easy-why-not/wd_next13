'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { CustomLink } from '@/components/elements/custom-link/custom-link';
import { useDisclosure } from '@/hooks/useDisclosure';

import { navData } from './nav.data';

import styles from './navigation.module.css';

export const Navigation: FC = () => {
  const { isOpen, open, close } = useDisclosure();

  return (
    <nav
      className={cn(styles.sidebar, { [styles.sidebar_open]: isOpen })}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <div className={styles.sidebar__image}>
        {isOpen ? (
          <Image
            priority
            src='/images/navIcons/mainLogo.svg'
            alt='Логотип'
            width={94}
            height={94}
          />
        ) : (
          <Image
            src='/images/navIcons/logoNavClose.svg'
            alt='Логотип'
            width={24}
            height={53}
            priority
          />
        )}
      </div>

      <ul
        className={cn(styles.sidebar__list, {
          [styles.sidebar__list_open]: isOpen
        })}
      >
        {navData.map((item) => (
          <CustomLink item={item} openMenu={isOpen} key={item.id} />
        ))}
      </ul>
    </nav>
  );
};
