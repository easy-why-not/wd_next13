import { FC, JSX } from 'react';

import styles from './spinner.module.css';

export const Spinner: FC = (): JSX.Element => (
  <div className={styles.spinner} />
);
