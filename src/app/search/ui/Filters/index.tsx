'use client';

import FilterRadioGroup from '@/app/search/ui/FilterRadioGroup';
import styles from './style.module.css';
import Card from '@/ui/Card';
import { filters } from '@/mock/filters';
import SwitchFilter from '@/app/search/ui/SwitchFilter';
import { SearchParams } from '@/hook/useSearch';

export default function ResultsType(): React.ReactNode {
  return (
    <Card className={styles.results}>
      <FilterRadioGroup
        items={filters.resultType}
        groupName="result_type"
        title="نوع نتایج"
      />

      <FilterRadioGroup
        items={filters.gender}
        groupName="gender"
        title="جنسبت"
      />

      <FilterRadioGroup
        items={filters.degree}
        groupName="degree"
        title="درجه علمی"
      />

      <FilterRadioGroup
        items={filters.turnType}
        groupName="turn_type"
        title="خدمت"
      />

      {filters.filters.map((item, index) => (
        <SwitchFilter
          key={index}
          title={item.label}
          id={item.id.toString() as Partial<SearchParams>}
        />
      ))}
    </Card>
  );
}
