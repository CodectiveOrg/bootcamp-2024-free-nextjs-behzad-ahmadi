import React from 'react';
import styles from './style.module.css';
import GlobalSearchBox from '@/ui/globalSearchBox';
import SearchedItems from '@/app/search/ui/searchedItems';
import SpecialtyItems from '@/app/search/ui/specialtyItems';
import ResultsType from '@/app/search/ui/filters';
import SortInputs from '@/app/search/ui/sortInputs';
import { doctors } from '@/mock/doctors';
import { DoctorData } from '@/types/type';
import DoctorCard from '@/app/search/ui/doctorInfoCard';
import { SearchParams } from '@/hook/useSearch';

interface Props {
  searchParams: Partial<Record<SearchParams, string>>;
}

export default function Search({ searchParams }: Props) {
  let results: DoctorData[] = doctors.filter(doctor => {
    return Object.entries(searchParams).every(([key, value]) => {
      if (!value || !key) return true; // Skip undefined or empty values

      if (key === 's') return doctor.name.includes(value); // Handle search by name

      if (['badge1', 'badge2', 'badge3', 'badge4'].includes(key))
        return doctor.badges.includes(value);

      return true;
    });
  });

  if (searchParams.sort) {
    results.sort((a, b) => a?.totalVotes - b?.totalVotes);
  }

  if (searchParams.firstAvailableAppointment) {
    results = results.filter(d =>
      d.firstAvailableAppointment.includes(
        searchParams.firstAvailableAppointment as string,
      ),
    );
  }

  return (
    <>
      <div className={styles.description}>
        <small>
          توضیح: به دلیل Data ناقص فقط برخی از فیلتر ها عمکرد صحیحی یا نسبتا
          صحیح دارد. مانند تایپ در باکس جستجو، مرتب سازی، خوش برخورد، کمترین
          معطلی
        </small>
      </div>

      <div className={styles.search}>
        <GlobalSearchBox />
      </div>

      <div className={styles['main-container']}>
        <div className={styles['filter-items']}>
          <SearchedItems />

          <SpecialtyItems />

          <ResultsType />
        </div>

        <div className={styles['center-container']}>
          <div className={styles.sort}>
            <SortInputs />
          </div>

          <div className={styles.results}>
            {results.map((item, index) => (
              <DoctorCard key={index} info={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
