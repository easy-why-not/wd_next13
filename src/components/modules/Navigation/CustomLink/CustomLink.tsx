import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { rightArrow } from '@/public';
import { useDisclosure } from '@/src/hooks';

import { INavData, INavDataChildren } from '../nav.data';

import styles from './customLink.module.css';

interface CustomLinkProps {
  item: INavData | INavDataChildren;
  openMenu?: boolean;
}

export const CustomLink: FC<CustomLinkProps> = ({ item, openMenu }) => {
  const pathname = usePathname();
  const { isOpen, toggle } = useDisclosure();

  const activeLink =
    pathname?.split('/')[1] === item.href.substring(1) ||
    ('children' in item && item.children?.find((el) => el.href === pathname));

  const styleLink = cn(styles.link_text, {
    [styles.link_text_open]: openMenu,
    [styles.link_text_active]: activeLink
  });

  return 'children' in item ? (
    <ul className={styles.list}>
      <li
        className={cn(styles.list__wrapper, {
          [styles.list__wrapper_open]: isOpen && openMenu
        })}
      >
        <Link className={styles.link} href={item.href}>
          <Image
            src={activeLink ? item.iconActive : item.icon}
            alt={item.alt}
            width={24}
            height={24}
          />
          <p className={styleLink}>{item.text}</p>
        </Link>
        {openMenu && (
          <Image
            className={cn(styles.arrow, { [styles.arrow__open]: isOpen })}
            src={rightArrow}
            alt='Открыть подменю'
            onClick={toggle}
            width={6}
            height={9}
          />
        )}
      </li>
      <ul className={styles.wrapper}>
        {openMenu &&
          isOpen &&
          item.children?.map((el) => (
            <li className={styles.li} key={el.id}>
              <Link className={styles.link} href={el.href}>
                <p
                  className={cn(styles.link_text, {
                    [styles.link_text_active]: el.href === pathname,
                    [styles.link_text_open]: isOpen
                  })}
                >
                  {el.text}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </ul>
  ) : (
    <li className={styles.li} key={item.id}>
      <Link className={styles.link} href={item.href}>
        {'icon' in item && (
          <Image
            src={activeLink ? item.iconActive : item.icon}
            alt={item.alt}
            width={24}
            height={24}
          />
        )}
        <p className={styleLink}>{item.text}</p>
      </Link>
    </li>
  );
};
