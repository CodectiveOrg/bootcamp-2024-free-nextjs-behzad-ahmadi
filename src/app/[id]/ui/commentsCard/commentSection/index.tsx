import React from 'react';
import styles from './style.module.css';
import UserInfo from '@/app/[id]/ui/commentsCard/commentSection/ui/userInfo';
import Rating from '@/app/[id]/ui/commentsCard/commentSection/ui/rating';
import { Feedback } from '@/types/type';
import Actions from '@/app/[id]/ui/commentsCard/commentSection/ui/actions';

type Props = { comments: Feedback[] };

export default function CommentSection({ comments }: Props) {
  console.log('comments', comments);
  return (
    <div className={styles.list}>
      {comments?.map(comment => (
        <div className={styles.container}>
          <div className={styles.header}>
            <UserInfo
              name={comment?.user_display_name}
              id={comment.user_id}
              status={comment.visit_status}
              date={comment.created_at}
            />

            <Rating
              rating={
                comment.avg_rate_value ? comment.avg_rate_value : 'بدون امتیاز'
              }
            />
          </div>

          <div className={styles.comment}>{comment.description}</div>

          <div className={styles.actions}>
            <Actions />
          </div>
        </div>
      ))}
    </div>
  );
}
