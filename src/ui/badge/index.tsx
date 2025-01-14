import { PropsWithChildren } from 'react';

import styles from './style.module.css';

export default function Badge({ children }: PropsWithChildren) {
  return <div className={styles.badge}>{children}</div>;
}
