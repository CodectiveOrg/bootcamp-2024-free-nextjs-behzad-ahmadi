import React from 'react';
import styles from './style.module.css';
import MingcuteShare2Line from '@/icons/MingcuteShare2Line';
import MingcuteThumbUp2Line from '@/icons/MingcuteThumbUp2Line';
import { shareContent } from '@/lib/helper';
import { ShareData } from '@/ui/Share';

type Props = { shareData: ShareData };

export default function Actions({ shareData }: Props) {
  return (
    <div className={styles.actions}>
      <span>
        <MingcuteThumbUp2Line /> مفید بود
      </span>

      <span
        onClick={() => {
          shareContent(shareData);
        }}
      >
        <MingcuteShare2Line />
        ارسال
      </span>
    </div>
  );
}
