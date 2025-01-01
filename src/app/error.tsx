'use client';

import React from 'react';
import styles from './error.module.css';
import errorImage from '@/assets/vectors/error.svg';
import Image from 'next/image';

type Props = { error: Error & { digest?: string }; reset: () => void };

export default function ErrorPage({ error, reset }: Props) {
  return (
    <div className={styles.error}>
      <div className={styles.container}>
        <div>
          <h1>خطایی رخ داده است!</h1>

          <button onClick={reset}>دوباره تلاش کنید</button>
        </div>

        <div>
          <Image src={errorImage} alt="خطا" />
        </div>

        <div className={styles.stackTrace}>
          <details>
            <summary>خطا</summary>
            <pre dir="ltr">{error.stack}</pre>
          </details>
        </div>
      </div>
    </div>
  );
}
