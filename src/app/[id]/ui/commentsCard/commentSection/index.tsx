import React from 'react';
import styles from './style.module.css';
import UserInfo from '@/app/[id]/ui/commentsCard/commentSection/ui/userInfo';
import Rating from '@/app/[id]/ui/commentsCard/commentSection/ui/rating';
import { Feedback } from '@/types/type';
import Actions from '@/app/[id]/ui/commentsCard/commentSection/ui/actions';

type Props = { comment: Feedback };

export default function CommentSection({ comment }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <UserInfo
          name={comment.userDisplayName}
          id={comment.userId}
          status={comment.visitStatus}
          date={comment.createdAt}
        />

        <Rating rating={comment.avgRateValue} />
      </div>

      <div className={styles.comment}>{comment.description}</div>

      <div className={styles.actions}>
        <Actions />
      </div>
    </div>
  );
}
