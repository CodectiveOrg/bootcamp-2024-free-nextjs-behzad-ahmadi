'use client';

import Bookmark, { useBookmark } from '@/ui/Bookmark';
import styles from './style.module.css';
import Share, { ShareData } from '@/ui/Share';
import ViewCount from '@/ui/ViewCount';

interface Props {
  isBookmarked: boolean;
  shareData: ShareData;
  viewCount: number;
}

export default function Actions({
  viewCount,
  shareData,
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

      <Share title="اشتراک گذاری" shareData={shareData} />

      <ViewCount label={viewCount.toString()} />
    </div>
  );
}
