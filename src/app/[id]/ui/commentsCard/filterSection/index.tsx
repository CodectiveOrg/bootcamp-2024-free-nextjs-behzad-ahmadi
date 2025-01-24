'use client';

import SelectInput, { SelectOption } from '@/ui/selectInput';
import styles from './style.module.css';
import { Input } from '@/ui/input';

const feedbackTypeOptions = [
  { label: 'همه', value: 'all' },
  { label: 'دارای نوبت', value: 'visited' },
];

const sortOptions = [
  { label: 'جدید ترین', value: '-created_at' },
  { label: 'مرتبط ترین', value: '-default_order' },
  { label: 'محبوب ترین', value: '-count_like' },
];

interface Props {
  onFeedbackChange?: (option: SelectOption) => void;
  onSortChange?: (option: SelectOption) => void;
  onSearch?: (value: string) => void;
}

export default function FilterSection({
  onFeedbackChange,
  onSortChange,
  onSearch,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.selects}>
        <SelectInput
          options={feedbackTypeOptions}
          label=""
          className={styles.item}
          onChange={onFeedbackChange}
        />

        <SelectInput
          options={sortOptions}
          label=""
          className={styles.item}
          onChange={onSortChange}
        />
      </div>

      <Input
        label=""
        placeholder="جستجو در نظرات بیماران"
        onChange={e => onSearch?.(e.target.value)}
      />
    </div>
  );
}
