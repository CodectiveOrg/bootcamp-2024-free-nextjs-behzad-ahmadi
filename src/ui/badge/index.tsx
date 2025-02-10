import { PropsWithChildren } from 'react';

import styles from './style.module.css';
import clsx from 'clsx';

interface Props extends PropsWithChildren {
  className?: string;
}

export default function Badge({ children, className }: Props) {
  return <div className={clsx(styles.badge, className)}>{children}</div>;
}
