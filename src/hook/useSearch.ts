'use client';

import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useCallback, useMemo } from 'react';

export type SearchParam = {
  name: string;
  value: string;
};

export default function useSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getParam = useCallback(
    (name: string) => searchParams.get(name),
    [searchParams],
  );

  const setParam = useCallback(
    ({ name, value }: SearchParam) => {
      const params = new URLSearchParams(searchParams);
      if (value == '') {
        params.delete(name);
        router.push(`?${params.toString()}`);
        return;
      }

      params.set(name, value);
      router.push(`?${params.toString()}`, { scroll: false });
    },

    [searchParams],
  );

  const paramsList = useMemo(
    () => parseSearchParams(searchParams),
    [searchParams],
  );

  const addParam = useCallback(
    ({ name, value }: SearchParam) => {
      const currentParams = new URLSearchParams(searchParams.toString());
      const existingValues = currentParams.getAll(name) || [];
      const newValue = [...existingValues, value];

      currentParams.set(name, newValue.join(','));

      router.push(`?${currentParams.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const deleteParam = useCallback((name: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(name);
    router.push(`?${params.toString()}`, { scroll: false });
  }, []);

  return { getParam, setParam, paramsList, addParam, deleteParam };
}

const parseSearchParams = (searchParams: ReadonlyURLSearchParams) => {
  const params = Array.from(searchParams.entries());

  return params.map(([name, value]) => ({ name, value }));
};
