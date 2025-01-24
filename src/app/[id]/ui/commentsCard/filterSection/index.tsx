'use client';

import SelectInput from '@/ui/selectInput';
import styles from './style.module.css';
import { Input } from '@/ui/input';
import { useCommentStore } from '@/app/[id]/context/commentsStore';

const feedbackTypeOptions = [
  { label: 'همه', value: 'all' },
  { label: 'دارای نوبت', value: 'visited' },
];

const sortOptions = [
  { label: 'جدید ترین', value: '-created_at' },
  { label: 'مرتبط ترین', value: '-default_order' },
  { label: 'محبوب ترین', value: '-count_like' },
];

interface Props {}

export default function FilterSection({}: Props) {
  const { setFeedbackSort, setFeedbackType, setSearch } = useCommentStore();

  return (
    <div className={styles.container}>
      <div className={styles.selects}>
        <SelectInput
          options={feedbackTypeOptions}
          label=""
          className={styles.item}
          onChange={option => setFeedbackType(option.value.toString())}
        />

        <SelectInput
          options={sortOptions}
          label=""
          className={styles.item}
          onChange={option => setFeedbackSort(option.value.toString())}
        />
      </div>

      <Input
        label=""
        placeholder="جستجو در نظرات بیماران"
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}
