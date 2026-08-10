import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import Divider from "@/components/ui/Divider";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Program",
  description:
    "The Understanding Tree Program™ is a whole-child educational framework built on three worlds and four paths.",
};

const WORLDS = [
  {
    title: "School World",
    description:
      "Where learning happens together. We explore knowledge, build skills, and engage with the world around us.",
  },
  {
    title: "Mind World",
    description:
      "Where we grow our thinking. We build focus, strengthen strategies, and understand how we learn.",
  },
  {
    title: "Heart World",
    description:
      "Where we build connection and compassion. We understand ourselves, care for others, and make a difference.",
  },
];

const PATHS = [
  { title: "Action Path", description: "We take initiative, lead with courage, and make things happen." },
  { title: "Connection Path", description: "We build relationships, show empathy, and bring people together." },
  { title: "Care Path", description: "We nurture, support, and help others grow." },
  { title: "Discovery Path", description: "We explore, imagine, and love to learn." },
];

const WHO_FOR = [
  { title: "Students", description: "PreK–12 & Adult Learners" },
  { title: "Educators", description: "Teachers & Classroom Staff" },
  { title: "Classrooms", description: "Whole Class & Small Groups" },
  { title: "Schools", description: "Administrators & School Leaders" },
  { title: "Families", description: "Parents & Caregivers" },
];

const SUPPORTS = [
  "Self-Awareness",
  "Relationships",
  "Communication",
  "Executive Functioning",
  "Social-Emotional Learning",
  "Collaboration",
  "Self-Advocacy",
  "Accessibility & Inclusion",
];

const ARTICLES = [
  {
    tag: "Executive Functioning",
    title: "When Motivation Doesn't Look Like Motivation",
  },
  {
    tag: "Social-Emotional Learning",
    title: "Teaching Empathy in Real and Practical Ways",
  },
  {
    tag: "Classroom Supports",
    title: "Building Classrooms Where Every Learner Belongs",
  },
];

export default function ProgramPage() {
  return (
    <>
      <section>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">The Understanding Tree</span>
            <h1>Program™</h1>
            <Divider center={false} />
            <p className="accent-copy reading-width">
              A whole-child educational framework that grows self-awareness,
              strengthens relationships, and supports lifelong growth.
            </p>
            <p className={styles.tagline}>
              Three Worlds. Four Paths. One Journey of Growth.™
            </p>
            <Link href="/contact" className="btn btn-primary">
              Explore the Program
            </Link>
          </div>
          <div>
            <PlaceholderArt
              label="Storybook illustration: The Understanding Tree with woodland companions gathered beneath it (approved artwork to be supplied — unreleased characters not to be named publicly)"
              ratio="4 / 3"
            />
            <p className={`accent-copy ${styles.caption}`}>
              Something is growing under The Understanding Tree… Stay
              connected as each friend is revealed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className={`container grid grid--3 ${styles.worldsGrid}`}>
          <div>
            <h2>What Is the Program™?</h2>
            <Divider center={false} />
            <p>
              The Understanding Tree Program™ is a whole-child educational
              framework that brings together personality, social-emotional
              learning, executive functioning, communication, accessibility,
              and human observation to help learners understand themselves,
              connect with others, and thrive.
            </p>
            <p className={styles.spaced}>
              Rooted in empathy, connection, and understanding, our Program
              is designed for real classrooms and real learners.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
              Learn More About the Program
            </Link>
          </div>

          <div>
            <h2>The Three Worlds</h2>
            <Divider center={false} />
            <ul className={styles.worldList}>
              {WORLDS.map((w) => (
                <li key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </li>
              ))}
            </ul>
            <p className="accent-copy">Empathy is the bridge that connects all three worlds.</p>
          </div>

          <div>
            <h2>The Four Paths</h2>
            <Divider center={false} />
            <ul className={styles.pathList}>
              {PATHS.map((p) => (
                <li key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </li>
              ))}
            </ul>
            <p className="accent-copy">Everyone carries all four paths within them.</p>
          </div>
        </div>
      </section>

      <section>
        <div className={`container grid grid--2 ${styles.whoWhatGrid}`}>
          <div>
            <span className="eyebrow">🍃 Who Is the Program For? 🍃</span>
            <ul className={styles.whoList}>
              {WHO_FOR.map((w) => (
                <li key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">🍃 What the Program Supports 🍃</span>
            <ul className={`grid grid--4 ${styles.supportGrid}`}>
              {SUPPORTS.map((s) => (
                <li key={s} className={styles.supportItem}>
                  {s}
                </li>
              ))}
            </ul>
            <p className="accent-copy">
              Supporting the whole child to thrive in school, in life, and
              in their own unique way.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="container">
          <span className="eyebrow">🍃 From the Program 🍃</span>
          <h2>Growing Under the Tree</h2>
          <p className="reading-width" style={{ marginBlock: "0.75rem 1.5rem" }}>
            Ideas, strategies, insights, and stories to support educators,
            families, and learners.
          </p>
          <div className={`grid grid--3 ${styles.articleGrid}`}>
            {ARTICLES.map((a) => (
              <article className="card" key={a.title}>
                <span className={styles.articleTag}>{a.tag}</span>
                <h3>{a.title}</h3>
                <span className={styles.comingSoon}>Blog launching soon</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaGrid}`}>
          <div>
            <h2>Bring The Understanding Tree™ to Your School</h2>
            <p className="accent-copy">Let&apos;s grow understanding together.</p>
          </div>
          <p>
            Interested in bringing The Understanding Tree Program™ to your
            school or district? We&apos;d love to connect with you.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Program Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
