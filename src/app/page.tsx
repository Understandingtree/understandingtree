import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Divider from "@/components/ui/Divider";
import NewsletterForm from "@/components/NewsletterForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Understanding Tree™ brings together education, advocacy, and practical resources through the Program, Advocacy, and Institute branches.",
};

const BRANCHES = [
  {
    key: "program",
    accent: styles.program,
    icon: "📖",
    title: "The Understanding Tree PROGRAM™",
    description:
      "A whole-child learning experience that builds self-awareness, strengthens relationships, and supports lifelong growth through three worlds and four paths.",
    cta: "Explore the Program",
    href: "/program",
  },
  {
    key: "advocacy",
    accent: styles.advocacy,
    icon: "🍃",
    title: "The Understanding Tree ADVOCACY™",
    description:
      "Compassionate, informed advocacy to help families navigate the special education process, understand their rights, and ensure every child is seen and supported.",
    cta: "Get Advocacy Support",
    href: "/advocacy",
  },
  {
    key: "institute",
    accent: styles.institute,
    icon: "🎓",
    title: "The Understanding Tree INSTITUTE™",
    description:
      "Resources, professional learning, and training for parents, educators, and professionals who want to better understand and support every learner.",
    cta: "Explore the Institute",
    href: "/institute",
  },
];

const AUDIENCES = [
  { title: "Children & Families", description: "Support, guidance, and understanding.", icon: "🌱" },
  { title: "Educators", description: "Tools, training, and classroom support.", icon: "🎓" },
  { title: "Advocates", description: "Strong voices. Stronger futures.", icon: "👥" },
  { title: "Professionals", description: "Resources to support every learner.", icon: "❤" },
  { title: "Schools & Organizations", description: "Partnerships that create change.", icon: "🏫" },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <Image
            src="/images/01_Master_Logo_The_Understanding_Tree.png"
            alt="The Understanding Tree™ master logo"
            width={480}
            height={480}
            priority
            className={styles.heroLogo}
          />
          <div>
            <span className="eyebrow">🌿 The 🌿</span>
            <h1>Understanding Tree</h1>
            <Divider center={false} />
            <p className={`accent-copy ${styles.tagline}`}>Understanding changes everything.</p>
            <p className={`reading-width ${styles.heroBody}`}>
              We bring together education, advocacy, and practical resources
              to help children, families, educators, and professionals
              better understand how people learn, communicate, connect, and
              grow.
            </p>
            <a href="#branches" className="btn btn-primary">
              Explore Our World
            </a>
          </div>
        </div>
      </section>

      <section id="branches">
        <div className="container">
          <div className={`grid grid--3 ${styles.branchGrid}`}>
            {BRANCHES.map((branch) => (
              <article className={`card ${styles.branchCard} ${branch.accent}`} key={branch.key}>
                <span className="icon-badge" aria-hidden="true">
                  {branch.icon}
                </span>
                <h2>{branch.title}</h2>
                <p>{branch.description}</p>
                <Link href={branch.href} className={`btn ${styles.branchBtn}`}>
                  {branch.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className={`container ${styles.storyGrid}`}>
          <div>
            <span className="eyebrow">🍃 Our Story 🍃</span>
            <p className={styles.storyText}>
              The Understanding Tree began with one child and a lot of
              questions.
            </p>
            <p className={styles.storyText}>
              Today, our mission is simple: to help people better understand
              themselves and one another so every learner has the
              opportunity to thrive.
            </p>
            <Link href="/about" className={styles.readMore}>
              Read Our Story →
            </Link>
          </div>

          <div className={styles.quoteWrap}>
            <QuoteBlock>Helping kids grow self-aware, kind, &amp; confident.</QuoteBlock>
          </div>

          <div>
            <span className="eyebrow">Stay Connected</span>
            <p className={styles.storyText}>
              Get updates, resources, and inspiration delivered to your
              inbox.
            </p>
            <div className={styles.newsletter}>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.audienceSection}>
        <div className="container grid grid--5">
          {AUDIENCES.map((a) => (
            <div className={styles.audience} key={a.title}>
              <span aria-hidden="true" className={styles.audienceIcon}>
                {a.icon}
              </span>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
