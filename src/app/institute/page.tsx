import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Divider from "@/components/ui/Divider";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Institute",
  description:
    "The Understanding Tree Institute™ offers resources and professional learning for parents, educators, and organizations who want to better understand themselves and the people they support.",
};

const ADULT_PATHS = [
  { title: "Action Path", icon: "✦" },
  { title: "Connection Path", icon: "◈" },
  { title: "Care Path", icon: "♡" },
  { title: "Discovery Path", icon: "☾" },
];

const RESOURCE_TRACKS = [
  {
    title: "Parents & Families",
    description: "Resources for understanding, supporting, and advocating.",
  },
  {
    title: "Educators",
    description: "Tools for understanding learners, strengthening relationships, and supporting the whole child.",
  },
  {
    title: "Work & Organizations",
    description: "Resources for communication, collaboration, self-awareness, and stronger teams.",
  },
];

const LEARNING_PATHWAYS = [
  "Parent Education",
  "Teacher Professional Development",
  "The Understanding Tree Program™ Training",
  "School & District Training",
  "Workplace & Team Learning",
  "Speaking & Presentations",
  "Advocacy Education",
];

export default function InstitutePage() {
  return (
    <>
      <section>
        <div className="container">
          <Image
            src="/images/12_Institute_Hero_Adults_Under_Tree.png"
            alt="Adults gathered beneath The Understanding Tree"
            width={1200}
            height={525}
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroText}>
            <h1>Institute™</h1>
            <p className="accent-copy">Growing with You Through Every Stage of Life</p>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className={`container reading-width ${styles.introBlock}`}>
          <h2>Understanding other people starts with understanding myself.</h2>
          <p>
            The Understanding Tree Institute™ grew from a simple truth: if
            we want to help children and learners flourish, the adults
            supporting them need understanding too. Parents, educators,
            professionals and teams all benefit when they learn more about
            themselves — and the different ways people think, communicate
            and grow.
          </p>
        </div>
      </section>

      <section>
        <div className={`container ${styles.adultsSection}`}>
          <h2>The Understanding Tree for Adults</h2>
          <p className="reading-width">
            The Understanding Tree grows with us. Its adult framework
            explores how different people approach communication,
            relationships, decision-making, collaboration, problem-solving
            and growth.
          </p>
          <ul className={styles.adultPaths}>
            {ADULT_PATHS.map((p) => (
              <li key={p.title}>
                <span aria-hidden="true">{p.icon}</span>
                {p.title}
              </li>
            ))}
          </ul>
          <p className="accent-copy">Everyone carries all four Paths within them.</p>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <h2>Explore Free Resources</h2>
          <p className="reading-width" style={{ marginBottom: "1.5rem" }}>
            Practical tools to support understanding, connection and growth
            — at home, in the classroom and at work. This resource library
            is in development.
          </p>
          <div className={`grid grid--3 ${styles.resourceGrid}`}>
            {RESOURCE_TRACKS.map((track) => (
              <div className={styles.resourceCard} key={track.title}>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <Link href="/contact" className="btn btn-on-dark">
                  Explore Free Resources →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={`container ${styles.ebookBanner}`}>
          <Image
            src="/images/13_Institute_Ebooks_Books_Botanical.png"
            alt="E-books and botanical elements"
            width={480}
            height={320}
            className={styles.ebookImage}
          />
          <h3>E-Books — Coming Soon</h3>
          <p>
            Educational e-books and guides are in development to help
            parents, educators, professionals and organizations grow their
            understanding.
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <h2>Learn With The Understanding Tree</h2>
          <Divider center={false} />
          <p>
            Educational learning and professional development for
            individuals, schools and organizations.
          </p>
          <ul className={styles.pathwayList}>
            {LEARNING_PATHWAYS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-on-dark">
            Learning &amp; Training Inquiry →
          </Link>
        </div>
      </section>

      <section className="section-tint">
        <div className={`container reading-width ${styles.orgSection}`}>
          <h2>Growing Understanding at Work</h2>
          <p>
            Strong teams aren&apos;t built by making everyone think and work
            the same way. They&apos;re strengthened when people learn to
            understand differences in communication, collaboration,
            problem-solving and perspective.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Explore Organizational Learning →
          </Link>
        </div>
      </section>

      <section>
        <div className="container">
          <QuoteBlock cite="Courtney Pedersen">
            The way I think, communicate and respond isn&apos;t the only
            way—and understanding those differences can change how I
            connect with people.
          </QuoteBlock>
        </div>
      </section>

      <section className="section-tint">
        <div className={`container ${styles.keepGrowing}`}>
          <h2>Keep Growing With Us</h2>
          <p>Explore resources. Discover new perspectives. Build greater understanding.</p>
          <div className={styles.keepGrowingButtons}>
            <Link href="/institute#resources" className="btn btn-secondary">
              Explore Resources →
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Learning &amp; Training Inquiry →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
