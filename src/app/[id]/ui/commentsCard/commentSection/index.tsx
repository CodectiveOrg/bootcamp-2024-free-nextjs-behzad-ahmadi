import React from 'react';
import styles from './style.module.css';
import UserInfo from '@/app/[id]/ui/CommentsCard/CommentSection/ui/userInfo';
import Rating from '@/app/[id]/ui/CommentsCard/CommentSection/ui/rating';
import { Feedback } from '@/types/type';
import Actions from '@/app/[id]/ui/CommentsCard/CommentSection/ui/actions';
import { BaseSiteURL } from '@/lib/constants';

type Props = { id: string; comments: Feedback[] };

export default function CommentSection({ id, comments }: Props): JSX.Element {
  const shareUrl = `${BaseSiteURL}/${id}`;

  return (
    <div className={styles.list}>
      {comments?.map(comment => (
        <div className={styles.comments} key={comment.Id}>
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
            <Actions
              shareUrl={shareUrl}
              shareText={comment.description?.slice(
                0,
                Math.min(10, comment.description.length - 10),
              )}
              shareTitle={comment.doctor_slug}
            />
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}
