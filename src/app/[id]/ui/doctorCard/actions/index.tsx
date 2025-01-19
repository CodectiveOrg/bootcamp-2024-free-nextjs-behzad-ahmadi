import Bookmark from '@/ui/bookmark';
import styles from './style.module.css';
import Share from '@/ui/share';
import ViewCount from '@/ui/viewCount';

interface Props {}

export default function Actions({}: Props) {
  return (
    <div className={styles.container}>
      <Bookmark isBookmarked={false} title="ذخیره" />

      <Share title="اشتراک گذاری" shareData={{ title: '', url: '' }} />

      <ViewCount label="555" />
    </div>
  );
}
