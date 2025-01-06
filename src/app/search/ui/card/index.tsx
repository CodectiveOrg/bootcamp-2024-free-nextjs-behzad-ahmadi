import { PropsWithChildren } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';

type Props = PropsWithChildren & { className?: string };

export default function Card({ children, className }: Props) {
  return (
    <div className={clsx(styles['filter-card'], className)}>{children}</div>
  );
}
