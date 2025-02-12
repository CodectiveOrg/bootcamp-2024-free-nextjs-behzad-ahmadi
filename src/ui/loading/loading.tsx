import styles from './style.module.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <span className={styles.dots}></span>
    </div>
  );
}
