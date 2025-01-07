'use client';

import FilterRadioGroup from '@/app/search/ui/filterRadioGroup';
import styles from './style.module.css';
import Card from '@/app/search/ui/card';
import { filters } from '@/mock/filters';
import Switch from '@/ui/switch';
import SwitchFilter from '@/app/search/ui/switchFilter';

export default function ResultsType() {
  return (
    <Card className={styles.container}>
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
        groupName="turnType"
        title="خدمت"
      />

      {filters.filters.map((item, index) => (
        <SwitchFilter key={index} title={item.label} id={item.id.toString()} />
      ))}
    </Card>
  );
}
