'use client';

import { FormEvent, ReactElement } from 'react';
import Link from 'next/link';

import MingcuteUser3Line from '@/icons/MingcuteUser3Line';

import styles from '@/app/auth/styles/auth-form.module.css';
import { Button } from '@/ui/Button/button';
import PasswordInput from '@/ui/PasswordInput/passwordInput';
import Input from '@/ui/Input';
import Card from '@/ui/Card';

export default function SignInForm(): ReactElement {
  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <div className={styles['auth-form']}>
      <Card>
        <div className={styles['card-content']}>
          <div className={styles.writings}>
            <h1>ورود</h1>
            <form onSubmit={formSubmitHandler}>
              <Input
                label="نام کاربری"
                type="text"
                name="username"
                prefixIcon={<MingcuteUser3Line />}
              />
              <PasswordInput
                label="رمز عبور"
                name="password"
                autoComplete="current-password"
              />
              <Button variant="primary">ورود</Button>
            </form>
            <div className={styles['change-form']}>
              قبلاً ثبت‌نام نکردید؟
              {` `}
              <Link href="/auth/sign-up">ثبت‌نام کنید</Link>.
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
