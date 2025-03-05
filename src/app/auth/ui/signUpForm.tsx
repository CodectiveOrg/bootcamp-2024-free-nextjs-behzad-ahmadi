'use client';

import { FormEvent, ReactElement } from 'react';

import styles from '@/app/auth/styles/auth-form.module.css';
import { Button } from '@/ui/Button/button';
import PasswordInput from '@/ui/PasswordInput/passwordInput';
import Input from '@/ui/Input';
import Card from '@/ui/Card';
import MingcuteMailLine from '@/icons/MingcuteMailLine';

export default function SignUpForm(): ReactElement {
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
              <Button variant="primary">ورود</Button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}
