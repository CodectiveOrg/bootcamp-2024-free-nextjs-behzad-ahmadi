import type { Metadata } from 'next';
import './globals.css';
import { Vazirmatn } from 'next/font/google';
import HeaderFC from '@/ui/header/headerFC';

const vazirmatn = Vazirmatn({
  subsets: ['latin', 'arabic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'روز نوبت هوشمند',
  description: 'سامانه رزرو نوبت دکتر',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <main>
          <HeaderFC />
          {children}
        </main>
      </body>
    </html>
  );
}
