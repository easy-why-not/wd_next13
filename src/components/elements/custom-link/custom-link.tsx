import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import {
  INavData,
  INavDataChildren
} from '@/components/layout/navigation/nav.data';
import { useDisclosure } from '@/hooks/useDisclosure';

import styles from './custom-link.module.css';

interface ICustomLinkProps {
  item: INavData;
  openMenu: boolean;
}

interface TCustomLinkWithoutChildrenProps
  extends Pick<ICustomLinkProps, 'item'> {
  activeLink: boolean | INavDataChildren | undefined;
  style: string;
}

interface TCustomLinkWithChildrenProps
  extends Pick<ICustomLinkProps, 'openMenu' | 'item'>,
    Pick<TCustomLinkWithoutChildrenProps, 'activeLink' | 'style'> {
  pathname: string;
}

const CustomLinkWithoutChildren: FC<TCustomLinkWithoutChildrenProps> = ({
  item,
  style,
  activeLink
}) => (
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
      <p className={style}>{item.text}</p>
    </Link>
  </li>
);

const CustomLinkWithChildren: FC<TCustomLinkWithChildrenProps> = ({
  item,
  activeLink,
  style,
  openMenu,
  pathname
}) => {
  const { isOpen, toggle } = useDisclosure();

  return (
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
          <p className={style}>{item.text}</p>
        </Link>
        {openMenu && (
          <Image
            className={cn(styles.arrow, { [styles.arrow__open]: isOpen })}
            src='/images/rightArrow.svg'
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
  );
};

export const CustomLink: FC<ICustomLinkProps> = ({ item, openMenu }) => {
  const pathname = usePathname();

  const activeLink =
    pathname?.split('/')[1] === item.href.substring(1) ||
    ('children' in item && item.children?.find((el) => el.href === pathname));

  const styleLink = cn(styles.link_text, {
    [styles.link_text_open]: openMenu,
    [styles.link_text_active]: activeLink
  });

  if (item.children)
    return (
      <CustomLinkWithChildren
        activeLink={activeLink}
        style={styleLink}
        pathname={pathname}
        item={item}
        openMenu={openMenu}
      />
    );

  return (
    <CustomLinkWithoutChildren
      activeLink={activeLink}
      style={styleLink}
      item={item}
    />
  );
};
