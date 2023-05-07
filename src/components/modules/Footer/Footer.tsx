import { Feedback, Text } from '@/src/components';

import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <Text tag='p' color='footer'>
      WatchDog Team 2019-{new Date().getFullYear()}
    </Text>
    <Feedback />
  </footer>
);
