'use client';

import { RatingBars } from '@/app/[id]/ui/commentsCard/ratingBars';
import { CommentRatings } from '@/mock/commentRatings';
import React, { useEffect, useMemo, useState } from 'react';

import styles from './style.module.css';
import FilterSection from '@/app/[id]/ui/commentsCard/filterSection';
import Card from '@/ui/card';
import { Feedback } from '@/types/type';
import { useCommentStore } from '@/app/[id]/context/commentsStore';

const BaseApiURL = 'https://apigw.paziresh24.com/ravi/v1';
const feedbackApi = (query?: string) =>
  fetch(`https://apigw.paziresh24.com/ravi/v1/feedbacks?${query}`);

type Props = {};

type ApiResponse = {
  data: Feedback[];
  totalCount: number;
};

export default function CommentsCard({}: Props) {
  const [feedbacks, setFeedbacks] = React.useState<Feedback[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const {
    doctorSlug,
    feedbackSort,
    feedbackType,
    filterFeedbackSort,
    filteredFeedbackType,
    minRate,
  } = useCommentStore();

  useEffect(() => {
    const fetchFeedbacks = async () => {
      setLoading(true);
      setError(null);

      try {
        const query = [
          doctorSlug
            ? `(doctor_slug,eq,${encodeURIComponent(doctorSlug)})`
            : '',
          `(reply_to_feedback_id,is,null)`,
          minRate !== null
            ? `(avg_rate_value,gt,${minRate})~or(avg_rate_value,is,null)`
            : '',
          ,
          filteredFeedbackType,
        ]
          .filter(Boolean) // Remove null or undefined values
          .join('~and');

        const url = `${BaseApiURL}/feedbacks?where=${query}&limit=10&offset=0&sort=${filterFeedbackSort}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch feedbacks: ${response.statusText}`);
        }

        const result: ApiResponse = await response.json();
        setFeedbacks(result.data);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, [doctorSlug, minRate, feedbackSort, feedbackType]);

  // if (loading) return <p>Loading feedbacks...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <Card>
      <div className={styles.container}>
        <RatingBars ratings={CommentRatings} />

        <FilterSection />
      </div>
    </Card>
  );
}
