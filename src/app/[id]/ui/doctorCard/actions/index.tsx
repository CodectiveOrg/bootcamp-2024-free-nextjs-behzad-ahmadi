'use client';

import Bookmark, { useBookmark } from '@/ui/Bookmark';
import styles from './style.module.css';
import Share from '@/ui/Share';
import ViewCount from '@/ui/ViewCount';

interface Props {
  isBookmarked: boolean;
  shareUrl: string;
  shareTitle: string;
  viewCount: number;
}

export default function Actions({
  viewCount,
  shareTitle,
  shareUrl,
  isBookmarked,
}: Props): JSX.Element {
  const { bookmark, toggleBookmark } = useBookmark({ isBookmarked });

  return (
    <div className={styles.actions}>
      <Bookmark
        isBookmarked={bookmark}
        title="ذخیره"
        onClick={toggleBookmark}
      />

      <Share
        title="اشتراک گذاری"
        shareData={{ title: shareTitle, url: shareUrl }}
      />

      <ViewCount label={viewCount.toString()} />
    </div>
  );
}
