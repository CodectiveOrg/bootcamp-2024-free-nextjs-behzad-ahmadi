import clsx from 'clsx';
import styles from './style.module.css';

interface Props {
  onClick?: () => void;
  className?: string;
  title?: string;
  checked?: boolean;
}

export default function Switch({
  onClick,
  title,
  checked,
  className,
}: Props): JSX.Element {
  return (
    <label className={styles['switch-container']}>
      <span className={styles.title}>{title}</span>

      <label className={clsx(styles.switch, className)}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onClick && onClick()}
        />
        <span className={styles.slider}></span>
      </label>
    </label>
  );
}
