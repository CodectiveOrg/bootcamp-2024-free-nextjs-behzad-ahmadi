import Image from 'next/image';

import styles from './style.module.css';
import MingcuteStarFill from '@/icons/MingcuteStarFill';
import { ReactNode } from 'react';

interface Props {
  image: string;
  name: string;
  description?: ReactNode;
  averageRating?: number;
  totalVotes?: number;
}

export default function Avatar({ ...info }: Props): JSX.Element {
  return (
    <div className={styles.avatar}>
      <Image
        src={info.image}
        alt=""
        width={80}
        height={80}
        className={styles.profileImage}
      />

      <div className={styles.info}>
        <h2 className={styles.name}>{info.name}</h2>
        <p className={styles['sub-title1']}>{info.description}</p>
        {info.averageRating && (
          <div className={styles.rating}>
            <div className={styles.stars}>
              <MingcuteStarFill />
            </div>
            <span>{info.averageRating}</span>
            {info.totalVotes && <span>({info.totalVotes} نظر)</span>}
          </div>
        )}
      </div>
    </div>
  );
}
