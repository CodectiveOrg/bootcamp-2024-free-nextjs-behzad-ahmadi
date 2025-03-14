'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

interface CommentContextType {
  feedbackSort: string;
  setFeedbackSort: (value: string) => void;
  feedbackType: string | null;
  setFeedbackType: (value: string | null) => void;
  filteredFeedbackType: string;
  filterFeedbackSort: string;
  search: string;
  setSearch: (value: string) => void;
}

const CommentContext = createContext<CommentContextType | undefined>(undefined);

export const CommentProvider = ({
  children,
}: {
  children: ReactNode;
}): React.ReactNode => {
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
    <CommentContext.Provider
      value={{
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
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error('useCommentContext must be used within a CommentProvider');
  }
  return context;
};
