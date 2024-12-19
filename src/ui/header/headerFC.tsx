"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type HeaderItem = { title: string; href: string };

const headerItems: HeaderItem[] = [
  { title: "خانه", href: "/" },
  { title: "جستجو", href: "/search" },
];

export default function HeaderFC() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link
              href={"/"}
              className={clsx(pathname === "/" && styles.active)}
            >
              خانه
            </Link>
          </li>
          <li>
            <Link
              href={"/search"}
              className={clsx(pathname === "/search" && styles.active)}
            >
              جستجو
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.cta}>ورود ثبنام</button>
    </header>
  );
}
