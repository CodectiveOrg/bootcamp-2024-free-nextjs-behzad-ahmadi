'use client';

import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useCallback, useMemo } from 'react';

export type SearchParamsItems = 's' | 'specialty';

type SearchParam = {
  name: SearchParamsItems;
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
      router.push(`?${params.toString()}`);
    },

    [searchParams],
  );

  const paramsList = useMemo(
    () => parseSearchParams(searchParams),
    [searchParams],
  );

  const deleteParam = useCallback((name: SearchParamsItems) => {
    const params = new URLSearchParams(searchParams);
    params.delete(name);
    router.push(`?${params.toString()}`);
  }, []);

  return { getParam, setParam, paramsList, deleteParam };
}

const parseSearchParams = (searchParams: ReadonlyURLSearchParams) => {
  const params = Array.from(searchParams.entries());

  return params.map(([name, value]) => ({ name, value }));
};
