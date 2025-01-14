'use client';

import { appointmentOptions, sortOptions } from '@/mock/filters';
import SelectInput, { SelectOption } from '@/ui/selectInput';
import React, { useCallback, useMemo } from 'react';
import useSearch from '@/hook/useSearch';
import styles from './style.module.css';

export default function SortInputs() {
  const { getParam, setParam } = useSearch();

  const sortItem = useMemo(() => getParam('sort'), [getParam('sort')]);
  const appointmentItem = useMemo(
    () => getParam('firstAvailableAppointment'),
    [getParam('firstAvailableAppointment')],
  );

  const handleSortChange = useCallback(
    (option: SelectOption) => {
      setParam({ name: 'sort', value: option.value.toString() });
    },
    [setParam],
  );

  const handleAppointmentChange = useCallback(
    (option: SelectOption) => {
      setParam({
        name: 'firstAvailableAppointment',
        value: option.value.toString(),
      });
    },
    [setParam],
  );

  return (
    <div className={styles.container}>
      <SelectInput
        options={sortOptions}
        onChange={handleSortChange}
        label={'مرتب سازی:'}
        value={sortOptions.find(v => v.value == sortItem)}
      />

      <SelectInput
        options={appointmentOptions}
        onChange={handleAppointmentChange}
        label={'نزدیک ترین نوبت:'}
        value={appointmentOptions.find(v => v.value == appointmentItem)}
      />
    </div>
  );
}
