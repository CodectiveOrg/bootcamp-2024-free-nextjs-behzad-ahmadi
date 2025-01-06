'use client';

import Card from '@/app/search/ui/card';
import useSearch, { SearchParamsItems } from '@/hook/useSearch';
import styles from './style.module.css';

export default function ResultTypes() {
  const { setParam } = useSearch();

  const handleAddFilter = (name: SearchParamsItems, value: string) => {
    setParam(name, value);
  };

  return (
    <Card className={styles.container}>
      <ul className={styles.list}>
        {/* {doctorSpecialties.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            onClick={() => handleAddFilter('specialty', item)}
          >
            {item}
          </li>
        ))} */}
      </ul>
    </Card>
  );
}
