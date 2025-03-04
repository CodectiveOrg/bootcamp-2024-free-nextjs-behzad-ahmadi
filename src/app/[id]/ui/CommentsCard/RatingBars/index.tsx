import type React from 'react';
import styles from './style.module.css';
import RatingBar from '@/ui/RatingBar';

interface Props {
  ratings: {
    label: string;
    score: number;
  }[];
}

export default function RatingBars({ ratings }: Props): React.ReactNode {
  return (
    <div className={styles.ratingsWrapper}>
      {ratings.map((rating, index) => (
        <RatingBar key={index} label={rating.label} rating={rating.score} />
      ))}
    </div>
  );
}
