'use client';

import MingcuteBookmarkFill from '@/icons/MingcuteBookmarkFill';
import MingcuteBookmarkLine from '@/icons/MingcuteBookmarkLine';

import styles from './style.module.css';

interface Props {
  isBookmarked: boolean;
  title?: string;
  onClick?: () => void;
}

export default function Bookmark({ isBookmarked, title, onClick }: Props) {
  return (
    <span onClick={onClick} className={styles.container}>
      {isBookmarked ? <MingcuteBookmarkFill /> : <MingcuteBookmarkLine />}
      <span>{title}</span>
    </span>
  );
}
