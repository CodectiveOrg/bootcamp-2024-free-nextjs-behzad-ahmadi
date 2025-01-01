import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import Header from '@/ui/header/header';
import Footer from '@/ui/footer';
import './globals.css';
import '@/styles/typography.css';

const vazirmatn = Vazirmatn({
  subsets: ['latin', 'arabic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'روز نوبت هوشمند',
  description: 'سامانه رزرو نوبت پزشک',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <Header />
        <main>{children}</main>
        <p className="tagline">نوبت دهی هوشمند پزشکان</p>
        <Footer />
      </body>
    </html>
  );
}
