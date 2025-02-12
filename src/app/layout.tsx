import type { Metadata } from 'next';
import Header from '@/ui/Header/header';
import Footer from '@/ui/Footer';
import './globals.css';
import '@/styles/typography.css';

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
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <p className="tagline">نوبت دهی هوشمند پزشکان</p>
        <Footer />
      </body>
    </html>
  );
}
