'use client';

import MingcuteShare2Line from '@/icons/MingcuteShare2Line';

import styles from './style.module.css';
import clsx from 'clsx';

export type ShareData = {
  title: string;
  url: string;
};

interface Props {
  title?: string;
  className?: string;
  shareData: ShareData;
}

export default function Share({
  title,
  shareData,
  className,
}: Props): React.ReactNode {
  const handleClick = (): void => {
    if (!navigator.share) {
      return;
    }

    navigator
      .share({ title: shareData.title, url: shareData.url })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing:', error));
  };

  return (
    <span className={clsx(styles.share, className)} onClick={handleClick}>
      <MingcuteShare2Line />

      <span>{title}</span>
    </span>
  );
}
