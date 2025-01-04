import React from 'react';
import styles from './style.module.css';
import GlobalSearchBox from '@/ui/globalSearchBox';

export default function Search() {
  return (
    <>
      <div className={styles.search}>
        <GlobalSearchBox />
      </div>
      <div className={styles['main-container']}>
        <div className={styles['filter-items']}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className={styles.results}>results</div>
      </div>
    </>
  );
}
