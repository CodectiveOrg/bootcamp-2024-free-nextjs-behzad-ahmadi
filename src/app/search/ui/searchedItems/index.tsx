'use client';

import useSearch, { SearchParamsItems } from '@/hook/useSearch';
import styles from './style.module.css';
import { MingcuteCloseLine } from '@/icons/MingcuteCloseLine';
import Card from '@/app/search/ui/card';

export default function SearchedItems() {
  const { paramsList, deleteParam } = useSearch();

  const handleDelete = (name: SearchParamsItems) => {
    deleteParam(name);
  };

  if (!paramsList.length) return null;

  return (
    <Card>
      <div className={styles['search-items']}>
        {paramsList?.map((item, index) => (
          <div key={index}>
            <span className={styles.item}>
              {item.value}
              <span
                className={styles.delete}
                onClick={() => handleDelete(item.name as SearchParamsItems)}
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
