import React, { useMemo } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';
import { formatDateToRelativePersian } from '@/lib/helper';

type Props = { name: string; id: number; status: string; date: string };

export default function UserInfo({ name, status, date }: Props) {
  const color = useMemo(() => Math.trunc(Math.random() * 5 + 1), [name]);

  const translatedStatus = useMemo(() => {
    switch (status) {
      case 'visited':
        return 'ویزیت شده';
      case 'not_visited':
        return 'ویزیت نشده';
      default:
        break;
    }
  }, [status]);

  return (
    <div className={styles.container}>
      <div className={clsx(styles.avatar, styles[`bg-color-${color}`])}>
        {name?.slice(0, 1)}
      </div>

      <div className={styles.info}>
        <div className={styles.r1}>
          <span className={styles.name}>{name}</span>
          {status && <span className={styles.status}>{translatedStatus}</span>}
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
