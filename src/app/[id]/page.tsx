import React from 'react';
import styles from './style.module.css';
import DoctorCard from '@/app/[id]/ui/doctorCard';
import CommentsCard from '@/app/[id]/ui/commentsCard';
import { CommentStoreProvider } from '@/app/[id]/context/commentsStore';
import { doctors } from '@/mock/doctors';
import NotFound from '@/app/not-found';
import ContactCard from './ui/contactCard';

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
          <div>نظرات در مورد دکتر {info.name}</div>
          <CommentsCard />
        </CommentStoreProvider>
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
