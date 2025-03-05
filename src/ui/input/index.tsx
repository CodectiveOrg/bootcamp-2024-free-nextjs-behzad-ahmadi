import { ComponentProps, ForwardedRef, forwardRef, ReactElement } from 'react';

import clsx from 'clsx';

import styles from './style.module.css';
import { Button } from '@/ui/Button/button';

type Props = ComponentProps<'input'> & {
  label: string;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  onSuffixClick?: ComponentProps<typeof Button>['onClick'];
};

function NormalInputComponent(
  {
    label,
    prefixIcon,
    suffixIcon,
    onSuffixClick,
    className,
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
        {suffixIcon && (
          <Button type="button" shape="inherit" onClick={onSuffixClick}>
            <div className={styles['suffix-icon']}>{suffixIcon}</div>
          </Button>
        )}
      </div>
    </label>
  );
}

export default forwardRef(NormalInputComponent);
