'use client';

import Image from 'next/image';
import styles from './style.module.css';
import MingcuteStarFill from '@/icons/MingcuteStarFill';
import Badge from '@/ui/badge';
import MingcuteLocationLine from '@/icons/MingcuteLocationLine';
import { DoctorData } from '@/types/type';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Props {
  info: DoctorData;
}

export default function DoctorCard({ info }: Props) {
  return (
    <div className={styles.card}>
      <Link href={`/${info.id}`}>
        <div className={styles.header}>
          <Image
            src={info.image}
            alt="Doctor profile"
            width={80}
            height={80}
            className={styles.profileImage}
          />

          <div className={styles.info}>
            <h2 className={styles.name}>{info.name}</h2>
            <p className={styles.credentials}>{info.brief}</p>
            <div className={styles.rating}>
              <div className={styles.stars}>
                <MingcuteStarFill />
              </div>
              <span>{info.averageRating}</span>
              <span>({info.totalVotes} نظر)</span>
            </div>
          </div>
        </div>
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
        <button className={styles.button}>نوبت دهی اینترنتی</button>
        <button className={styles.button}>ویزیت آنلاین</button>
      </div>
    </div>
  );
}
