'use client';

import Link from 'next/link';
import styles from './header.module.css';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type HeaderItem = { title: string; href: string };

const headerItems: HeaderItem[] = [
  { title: 'خانه', href: '/' },
  { title: 'جستجو', href: '/search' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {headerItems.map(({ href, title }, index) => (
            <li key={index}>
              <Link
                href={href}
                className={clsx(pathname === href && styles.active)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.cta}>ورود - ثبت نام</button>
    </header>
  );
}
