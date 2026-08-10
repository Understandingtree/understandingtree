"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/nav";
import styles from "./Header.module.css";

const CTA_BY_PATH: Record<string, string> = {
  "/advocacy": "Get Advocacy Support",
  "/about": "Let's Connect",
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const ctaLabel = CTA_BY_PATH[pathname] ?? "Get Support";

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="The Understanding Tree — Home">
          <span className={styles.mark} aria-hidden="true">
            🌳
          </span>
          <span className={styles.brandText}>
            The Understanding Tree
            <sup>™</sup>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={active ? styles.active : undefined}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
          {ctaLabel}
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">
            {open ? "Close menu" : "Open menu"}
          </span>
          <span className={styles.menuIcon} aria-hidden="true">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={styles.mobileNav}
        data-open={open}
        hidden={!open}
      >
        <ul>
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={active ? styles.active : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>
              {ctaLabel}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
