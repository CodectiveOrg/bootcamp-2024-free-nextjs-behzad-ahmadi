'use client';

import useSearch from '@/hook/useSearch';
import styles from './style.module.css';
import { MingcuteCloseLine } from '@/icons/MingcuteCloseLine';
import Card from '@/ui/Card';

export default function SearchedItems() {
  const { paramsList, deleteParam, clearAll } = useSearch();

  const handleDelete = (name: string) => {
    deleteParam(name);
  };

  const handleClearAll = () => {
    clearAll();
  };

  if (!paramsList.length) return null;

  return (
    <Card>
      <span className={styles['delete-all']} onClick={handleClearAll}>
        حذف همه
        <span className={styles.delete}>
          <MingcuteCloseLine />
        </span>
      </span>

      <div className={styles['search-items']}>
        {paramsList?.map((item, index) => (
          <div key={index}>
            <span className={styles.item}>
              {item.value}
              <span
                className={styles.delete}
                onClick={() => handleDelete(item.name)}
              >
                <MingcuteCloseLine />
              </span>
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
