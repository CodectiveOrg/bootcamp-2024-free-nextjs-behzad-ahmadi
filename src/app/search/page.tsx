import React from 'react';
import styles from './style.module.css';
import GlobalSearchBox from '@/ui/globalSearchBox';
import SearchedItems from '@/app/search/ui/searchedItems';
import SpecialtyItems from '@/app/search/ui/specialtyItems';
import ResultsType from '@/app/search/ui/filters';

export default function Search() {
  return (
    <>
      <div className={styles.search}>
        <GlobalSearchBox />
      </div>
      <div className={styles['main-container']}>
        <div className={styles['filter-items']}>
          <SearchedItems />

          <SpecialtyItems />

          <ResultsType />
        </div>
        <div className={styles.results}>results</div>
      </div>
    </>
  );
}
