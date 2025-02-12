'use client';

import MingcuteShare2Line from '@/icons/MingcuteShare2Line';

import styles from './style.module.css';
import clsx from 'clsx';

interface Props {
  title?: string;
  className?: string;
  shareData: {
    title: string;
    url: string;
  };
}

export default function Share({
  title,
  shareData,
  className,
}: Props): JSX.Element {
  const handleClick = (): void => {
    if (navigator.share) {
      navigator
        .share({ title: shareData.title, url: shareData.url })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing:', error));
    }
  };

  return (
    <span className={clsx(styles.share, className)} onClick={handleClick}>
      <MingcuteShare2Line />

      <span>{title}</span>
    </span>
  );
}
