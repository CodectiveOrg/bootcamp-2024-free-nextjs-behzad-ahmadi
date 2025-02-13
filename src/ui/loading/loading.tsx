import styles from './style.module.css';

export default function Loading(): JSX.Element {
  return (
    <div className={styles.loading}>
      <span className={styles.dots}></span>
    </div>
  );
}
