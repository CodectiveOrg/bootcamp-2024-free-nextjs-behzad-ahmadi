import MingcuteEye2Line from '@/icons/MingcuteEye2Line';
import styles from './style.module.css';
import clsx from 'clsx';

interface Props {
  label?: string;
  className?: string;
}

export default function ViewCount({
  label,
  className,
}: Props): React.ReactNode {
  return (
    <span className={clsx(styles['view-count'], className)}>
      <span>{label}</span>
      <MingcuteEye2Line />
    </span>
  );
}
