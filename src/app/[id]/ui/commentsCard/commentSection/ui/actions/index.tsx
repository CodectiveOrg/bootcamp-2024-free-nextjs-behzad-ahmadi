import React from 'react';
import styles from './style.module.css';
import MingcuteShare2Line from '@/icons/MingcuteShare2Line';
import MingcuteThumbUp2Line from '@/icons/MingcuteThumbUp2Line';
import { shareContent } from '@/lib/helper';

type Props = { shareUrl: string; shareTitle: string; shareText: string };

export default function Actions({ shareText, shareTitle, shareUrl }: Props) {
  return (
    <div className={styles.actions}>
      <span>
        <MingcuteThumbUp2Line /> مفید بود
      </span>

      <span
        onClick={() => {
          shareContent({ url: shareUrl, text: shareText, title: shareTitle });
        }}
      >
        <MingcuteShare2Line />
        ارسال
      </span>
    </div>
  );
}
