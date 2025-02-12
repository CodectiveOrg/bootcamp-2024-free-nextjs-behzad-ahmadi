'use client';

import React, { forwardRef } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';

interface Props {
  label: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url' | 'search';
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  autoCorrect?: string;
  autoCapitalize?: string;
  spellCheck?: boolean;
  maxLength?: number;
  minLength?: number;
  step?: number;
  pattern?: string;
  title?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      onChange,
      value,
      placeholder,
      className,
      inputClassName,
      type = 'text',
      disabled,
      readOnly,
      required,
      autoFocus,
      autoComplete,
      autoCorrect,
      autoCapitalize,
      spellCheck,
      maxLength,
      minLength,
      step,
      pattern,
      title,
    },
    ref,
  ): JSX.Element => {
    return (
      <div className={clsx(styles.input, className)}>
        <span className={styles.label}>{label}</span>
        <div className={styles['input-wrapper']}>
          <input
            ref={ref}
            type={type}
            value={value}
            placeholder={placeholder}
            className={clsx(styles.input, inputClassName)}
            onChange={onChange}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
            spellCheck={spellCheck}
            maxLength={maxLength}
            minLength={minLength}
            step={step}
            pattern={pattern}
            title={title}
          />
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';
