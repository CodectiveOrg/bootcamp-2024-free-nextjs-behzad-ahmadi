import SmartDocLogo from '@/logo/smartDocLogo';
import GlobalSearchBox from '@/ui/globalSearchBox';
import styles from './style.module.css';

export default async function Home() {
  return (
    <div className={styles.container}>
      <h1>
        <SmartDocLogo />
        <span>پزشک؛ هوشمند</span>
      </h1>

      <GlobalSearchBox />

      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
