'use client';

import {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useState,
} from 'react';

import Input from '@/ui/Input';

import MingcuteKey2Line from '@/icons/MingcuteKey2Line';
import MingcuteEye2Line from '@/icons/MingcuteEye2Line';
import MingcuteEyeCloseLine from '@/icons/MingcuteEyeCloseLine';

type Props = ComponentProps<typeof Input>;

function PasswordInput(
  { ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Input
      ref={ref}
      type={isVisible ? 'text' : 'password'}
      prefixIcon={<MingcuteKey2Line />}
      suffixIcon={isVisible ? <MingcuteEyeCloseLine /> : <MingcuteEye2Line />}
      onSuffixClick={() => setIsVisible(old => !old)}
      {...otherProps}
    />
  );
}

export default forwardRef(PasswordInput);
