import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';

import styles from './button.module.css';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
  size?: 'large';
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  appearance,
  children,
  size,
  className,
  disabled
}) => {
  const stylesButton = cn(styles.button, {
    [styles.button_ghost]: appearance === 'ghost',
    [styles.button__text_large]: size === 'large',
    [styles.button_disabled]: disabled
  });
  return (
    <button
      className={cn(className, stylesButton)}
      type='submit'
      disabled={disabled}
    >
      <span
        className={cn(styles.button__text, {
          [styles.button__text_ghost]: appearance === 'ghost'
        })}
      >
        {children}
      </span>
    </button>
  );
};
