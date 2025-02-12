import type React from 'react';
import styles from './style.module.css';
import { RatingBar } from '@/ui/RatingBar';

interface Props {
  ratings: {
    label: string;
    score: number;
  }[];
}

export const RatingBars: React.FC<Props> = ({ ratings }) => {
  return (
    <div className={styles.ratingsWrapper}>
      {ratings.map((rating, index) => (
        <RatingBar key={index} label={rating.label} score={rating.score} />
      ))}
    </div>
  );
};
