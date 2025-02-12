import GlobalSearchBox from '@/ui/GlobalSearchBox';
import styles from './style.module.css';
import Link from 'next/link';
import SmartDocLogo from '@/logo/SmartDocLogo';

const searchHistory = ['ارتوپد', 'قلب و عروق', 'داخلی'];

export default async function Home() {
  return (
    <div className={styles.home}>
      <h1>
        <SmartDocLogo />
        <span>پزشک؛ هوشمند</span>
      </h1>

      <GlobalSearchBox />

      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          {searchHistory.map(item => (
            <li key={item}>
              <Link href={`/?search=${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
