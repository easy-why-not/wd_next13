'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useDisclosure } from '@/hooks/useDisclosure';

import styles from './feedback.module.css';

export const Feedback = () => {
  const { isOpen, toggle } = useDisclosure();
  return (
    <ul className={styles.main}>
      {isOpen && (
        <>
          <li className={styles.item}>
            <Image
              src='/images/feedback/mail.svg'
              alt='Написать нам на почту'
              width={50}
              height={50}
            />
          </li>
          <li className={styles.item}>
            <Link href='/contacts'>
              <Image
                src='/images/feedback/contacts.svg'
                alt='Контакты'
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li className={styles.item}>
            <Image
              src='/images/feedback/chatBot.svg'
              alt='Чат-Бот'
              width={50}
              height={50}
            />
          </li>
        </>
      )}
      <li className={styles.item}>
        <Image
          onClick={toggle}
          src='/images/feedback/feedback.svg'
          alt='Открыть обратную связь'
          width={50}
          height={50}
        />
      </li>
    </ul>
  );
};
