'use client';

import { FormEvent, ReactElement, useRef, useState } from 'react';
import styles from '@/app/auth/styles/auth-form.module.css';
import { Button } from '@/ui/Button/button';
import PasswordInput from '@/ui/PasswordInput/passwordInput';
import Input from '@/ui/Input';
import Card from '@/ui/Card';
import MingcuteMailLine from '@/icons/MingcuteMailLine';
import Link from 'next/link';
import { SignUpDTO } from '@/types/dto/auth';
import { useRouter } from 'next/navigation';
import { fetcher } from '@/lib/helper';
import {
  validateSignUp,
  ValidationErrors,
} from '@/app/api/auth/sign-up/validation';

export default function SignUpForm(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    setErrors({});

    const formData = new FormData(e.currentTarget);

    const dto: SignUpDTO = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      confirm_password: formData.get('confirm_password') as string,
    };

    const validationErrors = validateSignUp(dto);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    const res = await fetcher('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify(dto),
    });

    if (res.error) {
      if (typeof res.error === 'object')
        setErrors(res.error as ValidationErrors);
      setLoading(false);

      return;
    }

    formRef.current?.reset();

    router.push('/dashboard');
  };

  return (
    <div className={styles['auth-form']}>
      <Card>
        <div className={styles['card-content']}>
          <div className={styles.writings}>
            <h1>ثبت نام</h1>
            <form onSubmit={formSubmitHandler} ref={formRef}>
              <Input
                label="ایمیل"
                type="text"
                name="email"
                prefixIcon={<MingcuteMailLine />}
                errorLabel={errors.email}
              />

              <PasswordInput
                label="رمز عبور"
                name="password"
                autoComplete="new-password"
                errorLabel={errors.password}
              />

              <PasswordInput
                label="تایید رمز عبور"
                name="confirm_password"
                autoComplete="new-password"
                errorLabel={errors.confirm_password}
              />
              <Button variant="primary" loading={loading}>
                ثبت نام
              </Button>
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
