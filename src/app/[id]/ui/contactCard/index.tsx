'use client';

import Card from '@/ui/card';
import styles from './style.module.css';
import MingcuteLocationLine from '@/icons/MingcuteLocationLine';
import MingcuteCalendar2Line from '@/icons/MingcuteCalendar2Line';
import MingcutePhoneLine from '@/icons/MingcutePhoneLine';
import Link from 'next/link';

interface Props {
  name: string;
  address: string;
  phone: string;
  calendar: { day: string; time: string }[];
  location: string;
}

export default function ContactCard({ address, location, name, phone }: Props) {
  const call = () => {
    window?.open(`tel:${phone}`);
  };

  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.name}>{name}</div>
        <div className={styles.address}>{address}</div>

        <div className={styles.calendar}>
          <MingcuteCalendar2Line />
          <span>مشاهده برنامه کاری پزشک</span>
        </div>

        <div className={styles.phone} onClick={call}>
          <MingcutePhoneLine /> {phone}
        </div>

        <Link href={location} target="_blank">
          <div className={styles.location}>
            <MingcuteLocationLine />
            <span>مشاهده در نقشه و مسریابی</span>
          </div>
        </Link>
      </div>
    </Card>
  );
}
