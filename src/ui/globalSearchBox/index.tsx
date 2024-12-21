import MingcuteLocationLine from '@/icons/MingcuteLocationLine';
import styles from './style.module.css';

export default function GlobalSearchBox() {
  return (
    <div className={styles['global-search-box']}>
      <div className={styles.prefix}></div>

      <input className={styles.input} />

      <div className={styles.divider}></div>

      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          <span>همه شهر ها</span>
        </button>
      </div>
    </div>
  );
}
