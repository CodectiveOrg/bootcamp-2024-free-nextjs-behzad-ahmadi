'use client';

import { doctorSpecialties } from '@/mock/doctorSpecialties';
import styles from './style.module.css';
import useSearch, { SearchParamsItems } from '@/hook/useSearch';
import { MingcuteCloseLine } from '@/icons/MingcuteCloseLine';
import FilterCard from '@/app/search/ui/filterCard';

export default function FilterItems() {
  const { setParam } = useSearch();

  const handleAddFilter = (name: SearchParamsItems, value: string) => {
    setParam({ name, value });
  };

  return (
    <FilterCard className={styles.container}>
      <ul className={styles.list}>
        {doctorSpecialties.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            onClick={() => handleAddFilter('specialty', item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </FilterCard>
  );
}
