import React from 'react';
import styles from './style.module.css';
import GlobalSearchBox from '@/ui/globalSearchBox';
import SearchItems from '@/app/search/ui/searchItems';
import FilterItems from '@/app/search/ui/filterItems';

export default function Search() {
  return (
    <>
      <div className={styles.search}>
        <GlobalSearchBox />
      </div>
      <div className={styles['main-container']}>
        <div className={styles['filter-items']}>
          <SearchItems />

          <FilterItems />
        </div>
        <div className={styles.results}>results</div>
      </div>
    </>
  );
}
