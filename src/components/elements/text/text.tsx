import cn from 'classnames';
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  JSX,
  PropsWithChildren
} from 'react';

import styles from './text.module.css';

export interface TextProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    PropsWithChildren {
  tag: 'h2' | 'p';
  table?: boolean;
  color?:
    | 'red'
    | 'green'
    | 'white'
    | 'blur'
    | 'footer'
    | 'subtitle'
    | 'text-instance';
}

export const Text: FC<TextProps> = ({
  className,
  tag,
  children,
  color
}): JSX.Element => {
  const pStyles = cn(styles.p, {
    [styles.p_blurText]: color === 'blur',
    [styles.p_footer]: color === 'footer',
    [styles.p_green]: color === 'green',
    [styles.p_red]: color === 'red',
    [styles.p_card]: color === 'white',
    [styles.p_subtitle]: color === 'subtitle',
    [styles.p_textInstance]: color === 'text-instance'
  });
  switch (tag) {
    case 'h2':
      return <h2 className={cn(styles.h2, className)}>{children}</h2>;
    case 'p':
      return <p className={pStyles}>{children}</p>;
    default:
      return <span />;
  }
};
