import React from 'react';
import styles from './style.module.css';

type Props = { name: string; id: number; status: string; date: string };

export default function UserInfo({ name, id, status }: Props) {
  return (
    <div>
      <div className={styles.avatar}>{name.slice(0, 1)}</div>

      <div>
        <div>
          <span className={styles.name}>{name}</span>
          <span className={styles.status}>{status}</span>
        </div>

        <div>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </div>
  );
}
