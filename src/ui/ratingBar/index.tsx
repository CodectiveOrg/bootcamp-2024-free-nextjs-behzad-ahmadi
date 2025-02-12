import type React from 'react';
import styles from './style.module.css';

interface Props {
  label: string;
  score: number;
  maxScore?: number;
}

export default function RatingBar({
  label,
  score,
  maxScore = 5,
}: Props): JSX.Element {
  return (
    <div className={styles.ratingItem}>
      <div className={styles.ratingHeader}>
        <span className={styles.ratingLabel}>{label}</span>
        <span className={styles.ratingScore}>{score.toFixed(1)}</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressed}
          style={{
            width: `${(score / maxScore) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
