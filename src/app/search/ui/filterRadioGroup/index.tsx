'use client';

import useSearch, { SearchParam, SearchParams } from '@/hook/useSearch';
import { FilterItem } from '@/types/type';
import { useMemo } from 'react';

import styles from './style.module.css';

interface Props {
  items: FilterItem[];
  groupName: Partial<SearchParams>;
  title: string;
}

export default function FilterRadioGroup({ items, groupName, title }: Props) {
  const { setParam, getParam } = useSearch();

  const handleSetFilter = ({ name, value }: SearchParam) => {
    setParam({ name, value });
  };

  const checkedItem = useMemo(() => getParam(groupName), [getParam, groupName]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.list}>
        {items.map((item, index) => (
          <label key={index} className={styles.item}>
            <input
              type="radio"
              value={item.value}
              name={groupName}
              checked={checkedItem == item.value}
              onChange={() =>
                handleSetFilter({ name: groupName, value: item.value })
              }
            />

            <span>{item.value}</span>
            <span className={styles.count}>{item.count}</span>
          </label>
        ))}
      </div>

      <hr className={styles.hr} />
    </div>
  );
}
