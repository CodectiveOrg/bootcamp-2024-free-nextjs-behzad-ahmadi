'use client';

import { ComponentProps, ReactElement } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import styles from './button.module.css';
import { CircularLoading } from '@/ui/Loading/loading';

export type ButtonVariant = 'default' | 'primary' | 'danger';
export type ButtonShape = 'inherit' | 'solid' | 'outlined';
export type ButtonSize = 'medium' | 'large';
export type ButtonPosition = 'default' | 'inline';

type CommonProps = {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  position?: ButtonPosition;
  loading?: boolean;
};

type ButtonProps = ComponentProps<'button'> & CommonProps;

type ButtonLinkProps = ComponentProps<typeof Link> & CommonProps;

export function Button({
  variant = 'default',
  shape = 'solid',
  size = 'medium',
  position = 'default',
  className,
  children,
  loading = false,
  ...otherProps
}: ButtonProps): ReactElement {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        styles[position],
        className,
      )}
      {...otherProps}
      disabled={otherProps.disabled || loading}
    >
      {children}

      {loading && <CircularLoading />}
    </button>
  );
}

export function ButtonLink({
  variant = 'default',
  shape = 'solid',
  size = 'medium',
  position = 'default',
  className,
  href,
  children,
  ...otherProps
}: ButtonLinkProps): ReactElement {
  return (
    <Link
      href={href}
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        styles[position],
        className,
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
