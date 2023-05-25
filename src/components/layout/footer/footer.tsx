import { Feedback } from '@/components/elements/feedback/feedback';
import { Text } from '@/components/elements/text/text';

import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <Text tag='p' color='footer'>
      WatchDog Team 2019-{new Date().getFullYear()}
    </Text>
    <Feedback />
  </footer>
);
