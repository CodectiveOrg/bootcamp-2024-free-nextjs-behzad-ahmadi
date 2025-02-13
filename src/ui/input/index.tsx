'use client';

import React, { forwardRef } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';

interface Props {
  label: React.ReactNode;
  className?: string;
  inputClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, className, inputClassName, ...otherProps }, ref): JSX.Element => {
    return (
      <div className={clsx(styles.input, className)}>
        <span className={styles.label}>{label}</span>
        <div className={styles['input-wrapper']}>
          <input
            ref={ref}
            className={clsx(styles.input, inputClassName)}
            {...otherProps}
          />
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';
