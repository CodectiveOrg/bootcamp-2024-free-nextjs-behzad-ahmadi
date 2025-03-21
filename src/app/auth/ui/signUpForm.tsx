'use client';

import { FormEvent, ReactElement } from 'react';
import styles from '@/app/auth/styles/auth-form.module.css';
import { Button } from '@/ui/Button/button';
import PasswordInput from '@/ui/PasswordInput/passwordInput';
import Input from '@/ui/Input';
import Card from '@/ui/Card';
import MingcuteMailLine from '@/icons/MingcuteMailLine';
import Link from 'next/link';
import { SignUpDTO } from '@/types/dto/auth';
import { toast } from 'react-toastify';
import { fetcher } from '@/lib/apiHelper';

export default function SignUpForm(): ReactElement {
  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: SignUpDTO = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    const res = await fetcher('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify(dto),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.error) return;
  };

  return (
    <div className={styles['auth-form']}>
      <Card>
        <div className={styles['card-content']}>
          <div className={styles.writings}>
            <h1>ثبت نام</h1>
            <form onSubmit={formSubmitHandler}>
              <Input
                label="ایمیل"
                type="text"
                name="email"
                prefixIcon={<MingcuteMailLine />}
              />

              <PasswordInput
                label="رمز عبور"
                name="password"
                autoComplete="new-password"
              />

              <PasswordInput
                label="تایید رمز عبور"
                name="confirmPassword"
                autoComplete="new-password"
              />
              <Button variant="primary">ثبت نام</Button>
            </form>
            <div className={styles['change-form']}>
              <Link href="/auth/sign-in">قبلا ثبت نام کردم</Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
