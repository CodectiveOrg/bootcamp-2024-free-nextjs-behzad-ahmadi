import MingcuteEye2Line from '@/icons/MingcuteEye2Line';

import styles from './style.module.css';
import clsx from 'clsx';
interface Props {
  label?: string;
  className?: string;
}

export default function ViewCount({ label, className }: Props) {
  return (
    <span className={clsx(styles.container, className)}>
      <span>{label}</span>

      <MingcuteEye2Line />
    </span>
  );
}
