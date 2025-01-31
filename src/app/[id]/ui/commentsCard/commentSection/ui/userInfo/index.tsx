import React from 'react';
import styles from './style.module.css';
import clsx from 'clsx';
import { formatDateToRelativePersian } from '@/lib/helper';

type Props = { name: string; id: number; status: string; date: string };

export default function UserInfo({ name, id, status, date }: Props) {
  return (
    <div className={styles.container}>
      <div
        className={clsx(
          styles.avatar,
          styles[`bg-color-${Math.trunc(Math.random() * 5 + 1)}`],
        )}
      >
        {name?.slice(0, 1)}
      </div>

      <div className={styles.info}>
        <div className={styles.r1}>
          <span className={styles.name}>{name}</span>
          {status && <span className={styles.status}>{status}</span>}
        </div>

        <div>
          <span className={styles.date}>
            {formatDateToRelativePersian(date)}
          </span>
        </div>
      </div>
    </div>
  );
}
