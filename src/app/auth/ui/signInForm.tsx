'use client';

import { FormEvent, ReactElement, useRef } from 'react';
import Link from 'next/link';
import MingcuteUser3Line from '@/icons/MingcuteUser3Line';
import styles from '@/app/auth/styles/auth-form.module.css';
import { Button } from '@/ui/Button/button';
import PasswordInput from '@/ui/PasswordInput/passwordInput';
import Input from '@/ui/Input';
import Card from '@/ui/Card';
import { SignInDTO } from '@/types/dto/auth';
import { useRouter } from 'next/navigation';
import { fetcher } from '@/lib/helper';

export default function SignInForm(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: SignInDTO = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    const res = await fetcher('/api/auth/sign-in', {
      method: 'POST',
      body: JSON.stringify(dto),
    });

    if (res.error) return;

    formRef.current?.reset();

    router.push('/dashboard');
  };

  return (
    <div className={styles['auth-form']}>
      <Card>
        <div className={styles['card-content']}>
          <div className={styles.writings}>
            <h1>ورود</h1>
            <form onSubmit={formSubmitHandler} ref={formRef}>
              <Input
                label="email"
                type="text"
                name="email"
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
