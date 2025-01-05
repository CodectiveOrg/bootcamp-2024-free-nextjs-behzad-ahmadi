import { PropsWithChildren } from 'react';
import styles from './style.module.css';

export default function FilterCard({ children }: PropsWithChildren) {
  return <div className={styles['filter-card']}>{children}</div>;
}
