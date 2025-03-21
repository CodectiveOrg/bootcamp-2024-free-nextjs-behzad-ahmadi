import type React from 'react';
import styles from './style.module.css';

interface Props {
  label: string;
  rating: number;
  maxScore?: number;
}

export default function RatingBar({
  label,
  rating,
  maxScore = 5,
}: Props): React.ReactNode {
  return (
    <div className={styles.ratingItem}>
      <div className={styles.ratingHeader}>
        <span className={styles.ratingLabel}>{label}</span>
        <span className={styles.ratingScore}>
          {Math.floor(rating * 10) / 10}
        </span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressed}
          style={{
            inlineSize: `${(rating / maxScore) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
