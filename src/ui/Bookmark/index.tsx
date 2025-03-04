'use client';

import MingcuteBookmarkFill from '@/icons/MingcuteBookmarkFill';
import MingcuteBookmarkLine from '@/icons/MingcuteBookmarkLine';

import styles from './style.module.css';
import { useState } from 'react';

interface Props {
  isBookmarked: boolean;
  title?: string;
  onClick?: () => void;
}

export default function Bookmark({
  isBookmarked,
  title,
  onClick,
}: Props): JSX.Element {
  return (
    <span onClick={onClick} className={styles.bookmark}>
      {isBookmarked ? <MingcuteBookmarkFill /> : <MingcuteBookmarkLine />}
      <span>{title}</span>
    </span>
  );
}

export function useBookmark({ isBookmarked }: { isBookmarked: boolean }) {
  const [bookmark, setBookmark] = useState(isBookmarked);

  const toggleBookmark = () => {
    setBookmark(b => !b);
  };

  return { bookmark, toggleBookmark };
}
