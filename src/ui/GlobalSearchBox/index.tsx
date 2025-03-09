'use client';

import MingcuteLocationLine from '@/icons/MingcuteLocationLine';
import styles from './style.module.css';
import useSearch from '@/hook/useSearch';
import { useEffect, useState } from 'react';

export default function GlobalSearchBox(): React.ReactNode {
  const { setParam, getParam } = useSearch();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(getParam('s') || '');
  }, [getParam]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setParam({ name: 's', value: newValue });
  };

  return (
    <div className={styles['global-search-box']}>
      <div className={styles.prefix}></div>

      <input
        className={styles.input}
        onChange={handleOnChange}
        value={value}
        placeholder="نام دکتر یا تخصص مورد نظر را جستو کنید"
      />

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
