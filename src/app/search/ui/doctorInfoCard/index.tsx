'use client';

import styles from './style.module.css';
import Badge from '@/ui/badge';
import MingcuteLocationLine from '@/icons/MingcuteLocationLine';
import { DoctorData } from '@/types/type';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Avatar from '@/ui/avatar';

interface Props {
  info: DoctorData;
}

export default function DoctorCard({ info }: Props) {
  const router = useRouter();

  const handleReserve = () => {
    router.push(`/${info.id}`);
  };

  return (
    <div className={styles.card}>
      <Link href={`/${info.id}`}>
        <Avatar
          averageRating={info.averageRating}
          image={info.image}
          name={info.name}
        />
      </Link>

      <div className={styles.location}>
        <MingcuteLocationLine />
        <span>{info.address}</span>
      </div>

      <div className={styles.status}>
        <div className={styles.statusItem}>
          {info.badges.map((item, index) => (
            <Badge key={index}>{item}</Badge>
          ))}
        </div>
      </div>

      <div className={styles.nextAvailable}>
        <span>اولین نوبت: {info.firstAvailableAppointment}</span>
        {/*<span>پاسخ: آنلاین و آماده مشاوره</span>*/}
      </div>

      <div className={styles.actions}>
        <button className={styles.button} onClick={handleReserve}>
          نوبت دهی اینترنتی
        </button>
        <button className={styles.button} onClick={handleReserve}>
          ویزیت آنلاین
        </button>
      </div>
    </div>
  );
}
