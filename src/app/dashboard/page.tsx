'use client';

import React from 'react';
import { Button } from '@/ui/Button/button';
import { useRouter } from 'next/navigation';
import { fetcher } from '@/lib/helper';

export default function Page(): React.ReactNode {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const res = await fetcher('/api/auth/sign-out');

    if (res.error) {
      return;
    }

    router.push('/');
  };

  return (
    <div>
      <Button variant="danger" onClick={handleClick}>
        خروج
      </Button>
    </div>
  );
}
