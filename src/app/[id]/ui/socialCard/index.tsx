import React from 'react';

import styles from './style.module.css';
import Card from '@/ui/card';

type Props = {
  socials: {
    name: string;
    image: string;
  }[];
};

export default function SocialCard({ socials }: Props) {
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>همین الان آنلاین ویزیت شوید</span>
          <span className={styles.price}></span>
        </div>

        <div className={styles.body}>
          <div></div>

          <div className={styles.socials}>
            {socials.map((item, index) => (
              <>
                <img key={index} src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </>
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </Card>
  );
}
