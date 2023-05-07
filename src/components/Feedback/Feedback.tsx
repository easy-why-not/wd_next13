'use client';

import Image from 'next/image';
import Link from 'next/link';

import { chatBot, contacts_fb, feedback, mail } from '@/public';
import { useDisclosure } from '@/src/hooks';

import styles from './feedback.module.css';

export const Feedback = () => {
  const { isOpen, toggle } = useDisclosure();
  return (
    <ul className={styles.main}>
      {isOpen && (
        <>
          <li className={styles.item}>
            <Image
              src={mail}
              alt='Написать нам на почту'
              width={50}
              height={50}
            />
          </li>
          <li className={styles.item}>
            <Link href='/contacts'>
              <Image src={contacts_fb} alt='Контакты' width={50} height={50} />
            </Link>
          </li>
          <li className={styles.item}>
            <Image src={chatBot} alt='Чат-Бот' width={50} height={50} />
          </li>
        </>
      )}
      <li className={styles.item}>
        <Image
          onClick={toggle}
          src={feedback}
          alt='Открыть обратную связь'
          width={50}
          height={50}
        />
      </li>
    </ul>
  );
};
