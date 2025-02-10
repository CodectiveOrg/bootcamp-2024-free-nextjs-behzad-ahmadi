'use client';

import styles from './style.module.css';
import Badge from '@/ui/badge';
import MingcuteLocationLine from '@/icons/MingcuteLocationLine';
import { DoctorData } from '@/types/type';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Avatar from '@/ui/avatar';
import Rating from '@/app/[id]/ui/commentsCard/commentSection/ui/rating';

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
      <div className={styles.container}>
        <div>
          <Link href={`/${info.id}`}>
            <Avatar
              image={info.image}
              name={info.name}
              subtitle1={
                <>
                  <span>تخصص: </span>
                  <span>{info.brief}</span>
                </>
              }
              subtitle2={
                <span>اولین نوبت: {info.firstAvailableAppointment}</span>
              }
            />
          </Link>
        </div>

        <div>
          <div className={styles.status}>
            <div className={styles.statusItem}>
              {info.badges.map((item, index) => (
                <Badge key={index} className={styles.statusItem}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className={styles.location}>
            <MingcuteLocationLine />
            <span>{info.address}</span>
          </div>
        </div>
      </div>

      <div className={styles.actionsContainer}>
        <div className={styles.actions}>
          <button className={styles.button} onClick={handleReserve}>
            نوبت دهی اینترنتی
          </button>
          <button className={styles.button} onClick={handleReserve}>
            ویزیت آنلاین
          </button>
        </div>

        <div className={styles.contact}>
          <Rating rating={info.averageRating.toFixed(1)} />
        </div>
      </div>
    </div>
  );
}
