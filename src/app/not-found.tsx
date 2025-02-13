import Image from 'next/image';
import SmartDocImage from '@/assets/images/smart-doc.png';
import styles from './not-found.module.css';
import GlobalSearchBox from '@/ui/GlobalSearchBox';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={styles['not-found']}>
      <div className={styles.container}>
        <div className={styles.writings}>
          <div>
            <div className={styles['status-code']}>404</div>

            <h1>صفحه‌ی مورد نظر پیدا نشد!</h1>

            <p>
              می‌توانید به <Link href="/">صفحه‌ی اصلی</Link> بروید یا از جستجوی
              سایت استفاده کنید.
            </p>
          </div>

          <div className={styles.search}>
            <GlobalSearchBox />
          </div>
        </div>

        <div className={styles.visuals}>
          <Image src={SmartDocImage} alt="" />
        </div>
      </div>
    </div>
  );
}
