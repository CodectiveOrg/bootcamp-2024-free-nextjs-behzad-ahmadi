import { PropsWithChildren } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';

type Props = PropsWithChildren & { className?: string };

export default function Card({ children, className }: Props) {
  return (
    <div className={styles.card}>
      <div className={clsx(styles.card, className)}>{children}</div>
    </div>
  );
}
