'use client';

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from 'react';

interface CommentStoreContextType {
  doctorSlug: string | null;
  setDoctorSlug: (value: string | null) => void;
  minRate: number | null;
  setMinRate: (value: number | null) => void;
  feedbackSort: string;
  setFeedbackSort: (value: string) => void;
  feedbackType: string | null;
  setFeedbackType: (value: string | null) => void;
  filteredFeedbackType: string;
  filterFeedbackSort: string;
  search: string;
  setSearch: (value: string) => void;
}

const CommentStoreContext = createContext<CommentStoreContextType | undefined>(
  undefined,
);

export const CommentStoreProvider = ({ children }: { children: ReactNode }) => {
  const [doctorSlug, setDoctorSlug] = useState<string | null>(
    'دکتر--محمدرسول-نظام-آبادی',
  );
  const [minRate, setMinRate] = useState<number | null>(0);
  const [feedbackSort, setFeedbackSort] = useState<string>('');
  const [feedbackType, setFeedbackType] = useState<string | null>('all');
  const [search, setSearch] = useState<string>('');

  const filteredFeedbackType = useMemo(() => {
    if (feedbackType === 'visited') return '(visit_status,eq,visited)';

    return '';
  }, [feedbackType]);

  const filterFeedbackSort = useMemo(() => {
    if (feedbackSort === '-count_like') return '-count_like';

    if (feedbackSort === '-default_order') return '-default_order';

    if (feedbackSort === '-created_at') return '-created_at';

    return '';
  }, [feedbackSort]);

  return (
    <CommentStoreContext.Provider
      value={{
        doctorSlug,
        setDoctorSlug,
        minRate,
        setMinRate,
        feedbackSort,
        setFeedbackSort,
        feedbackType,
        setFeedbackType,
        filteredFeedbackType,
        filterFeedbackSort,
        search,
        setSearch,
      }}
    >
      {children}
    </CommentStoreContext.Provider>
  );
};

export const useCommentStore = () => {
  const context = useContext(CommentStoreContext);
  if (!context) {
    throw new Error(
      'useCommentStore must be used within a CommentStoreProvider',
    );
  }
  return context;
};
