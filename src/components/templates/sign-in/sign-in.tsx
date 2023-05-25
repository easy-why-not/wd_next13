'use client';

import Image from 'next/image';

import { FormSignIn } from '@/components/modules/form/form-sign-in/form-sign-in';

import styles from './sign-in.module.css';

export const SignIn = () => {
  return (
    <div className={styles.main}>
      <div className={styles.pattern} />
      <div className={styles.wrapper__form}>
        <Image
          src='/images/navIcons/mainLogo.svg'
          alt='Логотип'
          width={210}
          height={230}
        />
        <FormSignIn />
      </div>
    </div>
  );
};
