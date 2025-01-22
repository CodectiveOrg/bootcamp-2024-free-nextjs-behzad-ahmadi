import { RatingBars } from '@/app/[id]/ui/commentsCard/ratingBars';
import { CommentRatings } from '@/mock/commentRatings';
import React from 'react';

import styles from './style.module.css';
import FilterSection from '@/app/[id]/ui/commentsCard/filterSection';
import Card from '@/ui/card';

type Props = {};

export default function CommentsCard({}: Props) {
  return (
    <Card>
      <div className={styles.container}>
        <RatingBars ratings={CommentRatings} />

        <FilterSection />
      </div>
    </Card>
  );
}
