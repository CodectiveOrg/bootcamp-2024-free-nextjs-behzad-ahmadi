import styles from './style.module.css';

export default function Loading(): React.ReactNode {
  return (
    <div className={styles.loading}>
      <span className={styles.dots}></span>
    </div>
  );
}

export function CircularLoading(): React.ReactNode {
  return <div className={styles.circular}></div>;
}
