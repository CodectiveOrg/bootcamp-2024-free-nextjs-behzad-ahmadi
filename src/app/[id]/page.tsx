import React from 'react';
import styles from './style.module.css';
import DoctorCard from '@/app/[id]/ui/doctorCard';
import CommentsCard from '@/app/[id]/ui/commentsCard';
import { CommentStoreProvider } from '@/app/[id]/context/commentsStore';
import { doctors } from '@/mock/doctors';
import NotFound from '@/app/not-found';

interface Props {
  params: { id: string };
}

export default async function DoctorDetails({ params }: Props) {
  const info = doctors.find(doctor => doctor.id === params.id);

  if (!info) return <NotFound />;

  return (
    <div className={styles.container}>
      <div className={styles['right-col']}>
        <DoctorCard doctor={info} />

        <CommentStoreProvider>
          <CommentsCard />
        </CommentStoreProvider>
      </div>
      <div className={styles['left-col']}>L</div>
    </div>
  );
}
