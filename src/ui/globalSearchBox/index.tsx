'use client';

import MingcuteLocationLine from '@/icons/MingcuteLocationLine';
import styles from './style.module.css';
import useSearch from '@/hook/useSearch';
import { useEffect, useState } from 'react';

export default function GlobalSearchBox() {
  const { setParam, getParam } = useSearch();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(getParam('s') || '');
  }, [getParam]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setParam('s', newValue);
  };

  return (
    <div className={styles['global-search-box']}>
      <div className={styles.prefix}></div>

      <input className={styles.input} onChange={handleOnChange} value={value} />

      <div className={styles.divider}></div>

      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          <span>همه شهر ها</span>
        </button>
      </div>
    </div>
  );
}
