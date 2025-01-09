import { PropsWithChildren } from 'react';

import styles from './style.module.css';

interface Props extends PropsWithChildren {}

export default function Badge({ children }: Props) {
  return <div className={styles.badge}>{children}</div>;
}
