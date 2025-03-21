import { ComponentProps, ForwardedRef, forwardRef, ReactElement } from 'react';

import clsx from 'clsx';

import styles from './style.module.css';
import { Button } from '@/ui/Button/button';
import Loading from '@/ui/Loading/loading';

type Props = ComponentProps<'input'> & {
  label: string;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  onSuffixClick?: ComponentProps<typeof Button>['onClick'];
  errorLabel?: string;
  loading?: boolean;
};

function NormalInputComponent(
  {
    label,
    prefixIcon,
    suffixIcon,
    onSuffixClick,
    className,
    errorLabel,
    loading = false,

    ...otherProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  return (
    <label className={clsx(styles['input'], className)}>
      <div className={styles['label-text']}>{label}</div>
      <div className={styles.box}>
        {prefixIcon && (
          <div className={styles['prefix-icon']}>{prefixIcon}</div>
        )}
        <input ref={ref} {...otherProps} />
        {suffixIcon && !loading && (
          <Button type="button" shape="inherit" onClick={onSuffixClick}>
            <div className={styles['suffix-icon']}>{suffixIcon}</div>
          </Button>
        )}
        {loading && <Loading />}
      </div>
      {errorLabel && <span className={styles.error}>{errorLabel}</span>}
    </label>
  );
}

export default forwardRef(NormalInputComponent);
