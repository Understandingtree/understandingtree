import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import Divider from "@/components/ui/Divider";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Advocacy",
  description:
    "The Understanding Tree Advocacy™ helps families understand the special education process, know their rights, and advocate with confidence.",
};

const APPROACH = [
  {
    title: "Understand the Child",
    description: "We start with the individual learner—not just a diagnosis or a document.",
  },
  {
    title: "Build Collaboration",
    description: "We support productive communication between families and educational teams whenever possible.",
  },
  {
    title: "Strengthen Parent Voice",
    description: "Parents deserve to understand what is happening and be meaningful participants in decisions.",
  },
  {
    title: "Focus on Access & Growth",
    description: "We keep the conversation centered on what the student needs to access education and make meaningful progress.",
  },
];

const SUPPORT_OFFERINGS = [
  { title: "IEP Review", description: "Review existing IEPs and documents to identify concerns, priorities, and possible next steps." },
  { title: "Meeting Preparation", description: "Help organize concerns, prepare questions, understand the process, and establish priorities before meetings." },
  { title: "Strategy Sessions", description: "Work together to create a plan, consider options, and develop strategies focused on your child's needs and rights." },
  { title: "Document Review", description: "Review evaluations, reports, notices, and school communications to help you understand what you're reading." },
  { title: "Parent Advocacy Coaching", description: "Build knowledge, organization, and confidence so you can advocate for your child with clarity and strength." },
];

const AREAS = [
  ["IEPs & Meetings", "Evaluations", "Accommodations", "Services & Supports", "Sensory Processing"],
  ["Executive Functioning", "Autism", "Hearing Accessibility", "School Communication", "Parent Rights (IDEA, FAPE)"],
];

const ARTICLES = [
  { tag: "Parent Advocacy", title: "How to Prepare for an IEP Meeting with Confidence" },
  { tag: "Know Your Rights", title: "Understanding FAPE: What California Parents Need to Know" },
  { tag: "IEP & Meetings", title: "5 Questions Every Parent Should Ask at an IEP Meeting" },
  { tag: "California Updates", title: "California Special Education Law Updates: What Parents Should Know" },
];

export default function AdvocacyPage() {
  return (
    <>
      <section>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">The Understanding Tree</span>
            <h1>Advocacy™</h1>
            <p className={`accent-copy ${styles.subTagline}`}>
              Advocating for Every Child. Empowering Every Family.
            </p>
            <Divider center={false} />
            <p className={styles.headline}>
              You know your child. I&apos;ll help you make sure their needs
              are understood.
            </p>
            <p className="reading-width">
              Special education can be overwhelming. I&apos;m here to help
              you understand the process, know your rights, and advocate
              with confidence—so you can support your child today and
              strengthen their future.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className="btn btn-primary">
                Start Here
              </Link>
              <a href="#approach" className="btn btn-secondary">
                How Advocacy Works
              </a>
            </div>
          </div>
          <PlaceholderArt
            label="Advocacy hero illustration: lantern, books, and a notepad reading 'My Child Matters. My Voice Matters.' (approved artwork to be supplied)"
            ratio="4 / 3"
          />
        </div>
      </section>

      <section className="section-dark">
        <div className={`container ${styles.philosophyGrid}`}>
          <p className={styles.philosophyMain}>
            My goal isn&apos;t to become your child&apos;s voice.
            <br />
            <span className="accent-copy">It&apos;s to help you strengthen yours.</span>
          </p>
          <p>
            Advocacy should build understanding, confidence, and
            independence. I want families to leave the process better
            prepared to understand their child&apos;s IEP, ask informed
            questions, communicate their concerns, and continue advocating
            long after our work together ends.
          </p>
        </div>
      </section>

      <section id="approach">
        <div className={`container grid grid--3 ${styles.threeCol}`}>
          <div>
            <span className="eyebrow">Why I Advocate</span>
            <p className={styles.bio}>
              I&apos;ve experienced the IEP process from more than one
              side—as a former IEP student, as a parent advocating for my
              own child, and now as an advocate helping other families
              navigate the journey.
            </p>
            <p className={styles.bio}>Those experiences shape how I show up for you.</p>
            <Link href="/about" className={styles.readMore}>
              Meet Courtney →
            </Link>
          </div>

          <div>
            <span className="eyebrow">Advocacy in Action</span>
            <p className={styles.bio}>
              Before the formal launch of The Understanding Tree Advocacy™,
              Courtney has voluntarily supported three families navigating
              special education concerns. Through these experiences, she
              has helped parents better understand available supports,
              identify next steps, prepare for conversations with their
              schools, and strengthen their ability to advocate for their
              children.
            </p>
            <p className={`accent-copy ${styles.bio}`}>
              These families were supported voluntarily and without charge
              as Courtney continued building her knowledge, experience, and
              training.
            </p>
          </div>

          <div>
            <span className="eyebrow">The Advocacy Approach</span>
            <ul className={styles.approachList}>
              {APPROACH.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
            <p className="accent-copy">
              Collaboration when possible. Firm advocacy when necessary. The
              child&apos;s needs always at the center.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className={`container grid grid--2 ${styles.supportAreasGrid}`}>
          <div>
            <span className="eyebrow">🍃 How I Can Support You 🍃</span>
            <ul className={styles.supportList}>
              {SUPPORT_OFFERINGS.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
            <p className="flag-note">
              Full advocacy services will be announced as they become
              available. The Understanding Tree Advocacy™ is currently in
              development as Courtney completes additional advocacy
              training and certification.
            </p>
          </div>

          <div>
            <span className="eyebrow">🍃 Areas We Commonly Navigate 🍃</span>
            <div className={styles.areasCols}>
              {AREAS.map((col, i) => (
                <ul key={i} className={styles.areasList}>
                  {col.map((area) => (
                    <li key={area}>🍃 {area}</li>
                  ))}
                </ul>
              ))}
            </div>
            <div className={`card ${styles.isIsntBox}`}>
              <h3>What Advocacy Is — And Isn&apos;t</h3>
              <p>
                The Understanding Tree Advocacy™ provides educational
                advocacy, information, preparation, and support.
              </p>
              <p>
                <strong>
                  I am not an attorney or therapist and do not provide legal
                  advice or legal representation. Parents and guardians are
                  the final decision-makers.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`container ${styles.blogRow}`}>
          <div className={styles.blogMain}>
            <span className="eyebrow">🍃 From the Advocacy Branch 🍃</span>
            <p className="reading-width" style={{ marginBlock: "0.5rem 1.25rem" }}>
              Insights, information, and advocacy tools for families
              navigating special education.
            </p>
            <div className="grid grid--4">
              {ARTICLES.map((a) => (
                <article className="card" key={a.title}>
                  <span className={styles.articleTag}>{a.tag}</span>
                  <h3>{a.title}</h3>
                  <span className={styles.comingSoon}>Blog launching soon</span>
                </article>
              ))}
            </div>
          </div>

          <aside className={`card ${styles.notAloneCard}`}>
            <h3>You Are Not Alone.</h3>
            <p>
              If you feel overwhelmed, confused, or stuck, let&apos;s talk.
              Together, we can create a plan and help you move forward with
              clarity and confidence.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get Advocacy Support
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-dark">
        <div className={`container ${styles.footerBanner}`}>
          <p className={styles.bannerHeadline}>
            Understanding today. Advocating together. Stronger tomorrow.
          </p>
          <p>
            I&apos;m here to help you understand the process, know your
            rights, and advocate for what your child needs to succeed.
          </p>
        </div>
      </section>
    </>
  );
}
