import type { Metadata } from 'next';
import './globals.css';
import { Vazirmatn } from 'next/font/google';
import Header from '@/ui/header/header';

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
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
