'use client';

import Bookmark, { useBookmark } from '@/ui/bookmark';
import styles from './style.module.css';
import Share from '@/ui/share';
import ViewCount from '@/ui/viewCount';

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
}: Props) {
  const { bookmark, toggleBookmark } = useBookmark({ isBookmarked });

  return (
    <div className={styles.container}>
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
