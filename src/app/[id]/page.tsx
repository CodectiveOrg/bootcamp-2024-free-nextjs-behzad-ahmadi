import React from 'react';
import styles from './style.module.css';
import DoctorCard from '@/app/[id]/ui/doctorCard';
import CommentsCard from '@/app/[id]/ui/commentsCard';

interface Props {
  params: { id: string };
}

export default async function DoctorDetails({ params }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['right-col']}>
        <DoctorCard badges={['دکتر', 'پزشک']} />
        <CommentsCard />
      </div>
      <div className={styles['left-col']}>L</div>
    </div>
  );
}
