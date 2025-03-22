'use client';

import React from 'react';
import { Bounce, ToastContainer, ToastContainerProps } from 'react-toastify';

type Props = Partial<ToastContainerProps>;

export default function Toast(props: Props): React.ReactNode {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      limit={3}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      {...props}
    />
  );
}
