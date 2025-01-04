'use client';

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';

export default function useSearch() {
  const searchParams = useSearchParams();

  const query = parseSearchParams(searchParams);

  return query;
}

const parseSearchParams = (searchParams: ReadonlyURLSearchParams) => {
  const params = Array.from(searchParams.entries());

  return params.map(([name, value]) => ({ name, value }));
};
