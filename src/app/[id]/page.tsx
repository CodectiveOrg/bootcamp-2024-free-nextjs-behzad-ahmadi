import React from 'react';
import styles from './style.module.css';
import DoctorCard from '@/app/[id]/ui/DoctorCard';
import CommentsCard from '@/app/[id]/ui/CommentsCard';
import { CommentProvider } from '@/app/[id]/context/CommentsContext';
import { doctors } from '@/mock/doctors';
import NotFound from '@/app/not-found';
import ContactCard from './ui/ContactCard';

interface Props {
  params: { id: string };
}

export default async function DoctorDetails({ params }: Props) {
  const info = doctors.find(doctor => doctor.id === params.id);

  if (!info) return <NotFound />;

  return (
    <div className={styles.container}>
      <div className={styles['main-col']}>
        <DoctorCard doctor={info} />

        <CommentProvider>
          <div>نظرات در مورد دکتر {info.name}</div>
          <CommentsCard />
        </CommentProvider>
      </div>

      <div className={styles['contact-col']}>
        <div>آدرس و تلفن تماس</div>

        <ContactCard
          address={info.address}
          name={info.name}
          phone={info.phone}
          location={info.location}
          calendar={[]}
        />
      </div>
    </div>
  );
}
