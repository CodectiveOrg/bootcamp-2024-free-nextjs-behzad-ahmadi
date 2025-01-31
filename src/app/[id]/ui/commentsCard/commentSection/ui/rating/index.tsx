import React from 'react';
import styles from './style.module.css';

type Props = { rating: number | string };

export default function Rating({ rating }: Props) {
  return <div className={styles.rating}>{rating}</div>;
}
