import { SignUpDTO } from '@/types/dto/auth';

export type ValidationErrors = {
  email?: string;
  password?: string;
  'confirm-password'?: string;
};

export function validateSignUp(body: SignUpDTO): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!body.email) errors.email = 'ایمیل الزامی است';
  else {
    const email = body.email.trim();
    if (email.length === 0) errors.email = 'ایمیل الزامی است';
    else if (email.length > 255)
      errors.email = 'ایمیل نمی‌تواند بیشتر از ۲۵۵ کاراکتر باشد';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = 'فرمت ایمیل نامعتبر است';
  }

  if (!body.password) errors.password = 'پسورد الزامی است';
  else if (body.password.length < 8)
    errors.password = 'پسورد باید حداقل ۸ کاراکتر باشد';
  else if (body.password.length > 100)
    errors.password = 'پسورد نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد';
  else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(body.password))
    errors.password = 'پسورد باید شامل حروف بزرگ، کوچک و عدد باشد';
  else if (body.password !== body['confirm-password'])
    errors['confirm-password'] = 'تایید رمز صحیح نیست';

  return errors;
}
