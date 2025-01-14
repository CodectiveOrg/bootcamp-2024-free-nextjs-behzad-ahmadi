'use client';

import { doctorSpecialties } from '@/mock/doctorSpecialties';
import styles from './style.module.css';
import useSearch, { SearchParam } from '@/hook/useSearch';
import Card from '@/app/search/ui/card';

export default function SpecialtyItems() {
  const { setParam } = useSearch();

  const handleAddFilter = ({ name, value }: SearchParam) => {
    setParam({ name, value });
  };

  return (
    <Card className={styles.container}>
      <ul className={styles.list}>
        {doctorSpecialties.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            onClick={() => handleAddFilter({ name: 'specialty', value: item })}
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
