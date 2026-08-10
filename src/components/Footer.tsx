import Link from "next/link";
import styles from "./Footer.module.css";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", glyph: "f" },
  { label: "Instagram", href: "#", glyph: "◎" },
  { label: "LinkedIn", href: "#", glyph: "in" },
  { label: "YouTube", href: "#", glyph: "▶" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand}>
            <span aria-hidden="true">🌳</span>
            <span>
              The Understanding Tree<sup>™</sup>
            </span>
          </Link>
          <p className="accent-copy">Understanding changes everything.</p>
        </div>

        <nav aria-label="Footer" className={styles.explore}>
          <h2>Explore</h2>
          <ul>
            <li>
              <Link href="/program">Program</Link>
            </li>
            <li>
              <Link href="/advocacy">Advocacy</Link>
            </li>
            <li>
              <Link href="/institute">Institute</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.connect}>
          <h2>Follow Us</h2>
          <ul className={styles.social}>
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label}>
                  <span aria-hidden="true">{s.glyph}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.legal}>
          <h2 className="visually-hidden">Legal</h2>
          <ul>
            <li>
              <Link href="/legal#privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/legal#accessibility">Accessibility Statement</Link>
            </li>
            <li>
              <Link href="/legal#no-guarantees">Terms &amp; Disclaimer</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {year} The Understanding Tree™. All rights reserved.</p>
        <p className={styles.aiNote}>
          Illustrations created with AI assistance under the creative direction of Courtney Pedersen.
        </p>
      </div>
    </footer>
  );
}
