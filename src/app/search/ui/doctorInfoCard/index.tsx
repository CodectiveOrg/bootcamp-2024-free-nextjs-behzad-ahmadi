'use client';

import styles from './style.module.css';
import Badge from '@/ui/Badge';
import MingcuteLocationLine from '@/icons/MingcuteLocationLine';
import { DoctorData } from '@/types/type';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Avatar from '@/ui/Avatar';

interface Props {
  info: DoctorData;
}

export default function DoctorCard({ info }: Props): JSX.Element {
  const router = useRouter();

  const handleReserve = () => {
    router.push(`/${info.id}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.doctor}>
        <div>
          <Link href={`/${info.id}`}>
            <Avatar
              image={info.image}
              name={info.name}
              averageRating={info.averageRating}
              subtitle1={
                <>
                  <span>تخصص: </span>
                  <span>{info.brief}</span>
                </>
              }
            />
          </Link>

          <div className={styles.status}>
            <div className={styles.statusItem}>
              {info.badges.map((item, index) => (
                <Badge key={index} className={styles.statusItem}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <div>اولین نوبت: {info.firstAvailableAppointment}</div>

          <div className={styles.location}>
            <MingcuteLocationLine />
            <span>{info.address}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
