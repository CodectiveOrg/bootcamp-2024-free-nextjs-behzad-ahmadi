'use client';

import RatingBars from '@/app/[id]/ui/CommentsCard/RatingBars';
import { CommentRatings } from '@/mock/commentRatings';
import React, { useEffect, useState } from 'react';
import FilterSection from '@/app/[id]/ui/CommentsCard/FilterSection';
import Card from '@/ui/Card';
import { Feedback } from '@/types/type';
import { useCommentContext } from '@/app/[id]/context/CommentsContext';
import CommentSection from '@/app/[id]/ui/CommentsCard/CommentSection';
import { useParams } from 'next/navigation';
import Loading from '@/ui/Loading/loading';
import styles from './style.module.css';

const BaseApiURL = 'https://apigw.paziresh24.com/ravi/v1';

type ApiResponse = {
  list: Feedback[];
  pageInfo: {
    isFirstPage: boolean;
    isLastPage: boolean;
    page: number;
    pageSize: number;
    totalRows: number;
  };
};

export default function CommentsCard(): JSX.Element {
  const [feedbacks, setFeedbacks] = React.useState<Feedback[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const {
    feedbackSort,
    feedbackType,
    filterFeedbackSort,
    filteredFeedbackType,
    search,
  } = useCommentContext();

  useEffect(() => {
    const controller = new AbortController();
    const debounceTimeout = setTimeout(async () => {
      setLoading(true);
      setError(null);

      try {
        const query = [`(description,like,${search})`, filteredFeedbackType]
          .filter(Boolean) // Remove null or undefined values
          .join('~and');

        const url = `${BaseApiURL}/feedbacks?where=${query}&limit=10&offset=0&sort=${filterFeedbackSort}`;

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          console.log(`Failed to fetch feedbacks: ${response.statusText}`);
          return;
        }

        const result: ApiResponse = await response.json();

        setFeedbacks(result.list);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }, 500); // 500ms delay

    return () => {
      controller.abort();
      clearTimeout(debounceTimeout);
    };
  }, [
    feedbackSort,
    feedbackType,
    search,
    filterFeedbackSort,
    filteredFeedbackType,
  ]);

  return (
    <Card>
      {error && <div>{error}</div>}

      <div className={styles.comments}>
        <RatingBars ratings={CommentRatings} />

        <hr />

        <FilterSection />

        <hr />

        {loading && <Loading />}

        <CommentSection comments={feedbacks} id={id} />
      </div>
    </Card>
  );
}
