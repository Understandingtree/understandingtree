import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/ui/Divider";
import QuoteBlock from "@/components/ui/QuoteBlock";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Courtney Pedersen, Founder & Creator of The Understanding Tree™ — an IEP student, a parent, an advocate, and a lifelong learner.",
};

const CREDENTIALS = [
  {
    title: "Certified Insight Coach",
    description:
      "Transformational coaching training rooted in ICF Core Competencies and Insights Coaching principles.",
  },
  {
    title: "CASEL — An Introduction to Social and Emotional Learning",
    description: "Certificate of Completion in foundational social and emotional learning.",
  },
  {
    title: "Discover Sensory Processing and Integration (G130)",
    description: "Completed training in sensory processing and integration.",
  },
  {
    title: "Special Education Advocacy — In Progress",
    description: "Currently pursuing special education advocacy certification through The Arc.",
  },
];

const GUIDES = [
  { title: "Empathy", description: "I lead with empathy and meet people where they are." },
  { title: "Understanding", description: "I listen deeply before making assumptions." },
  { title: "Knowledge", description: "I share what I learn so others can feel less alone." },
  { title: "Connection", description: "I believe strong relationships create stronger outcomes." },
  { title: "Possibility", description: "I focus on what can grow, change, and move forward." },
];

export default function AboutPage() {
  return (
    <>
      <section>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">About</span>
            <h1 className={styles.scriptName}>Courtney</h1>
            <Divider center={false} />
            <p className={styles.role}>Founder &amp; Creator, The Understanding Tree™</p>
            <p className="accent-copy">Understanding changes everything.</p>
          </div>
          <Image
            src="/images/14_About_Courtney_Portrait_Under_Tree.png"
            alt="Courtney Pedersen, Founder of The Understanding Tree™"
            width={720}
            height={540}
            priority
            className={styles.portrait}
          />
        </div>
      </section>

      <section>
        <div className={`container ${styles.bodyGrid}`}>
          <div className={styles.mainCol}>
            <span className="eyebrow">»» My Story ♡ ««</span>
            <div className={styles.storyText}>
              <p>I&apos;m Courtney Pedersen—an IEP student, a parent, an advocate, and a lifelong learner.</p>
              <p>
                I grew up with hearing loss and attended my own IEP meetings
                beginning in sixth grade. Years later, I found myself on the
                other side of the table as a parent, navigating a system
                that often focuses on labels instead of listening.
              </p>
              <p>
                My child didn&apos;t always have the words to explain what
                they were experiencing. That&apos;s when I realized how
                powerful understanding can be.
              </p>
              <p>
                I began asking questions, reading, researching, and learning
                everything I could about personality, social-emotional
                learning, executive functioning, sensory processing,
                communication, and accessibility.
              </p>
              <p>
                One idea kept bringing everything back together:{" "}
                <strong>Take the time to understand the child.</strong>
              </p>
              <p>
                What started with children grew to include parents,
                educators, advocates, and adults—because we cannot ask
                children to understand themselves and one another without
                helping the adults around them do the same.
              </p>
              <p className="accent-copy">That&apos;s how The Understanding Tree™ was born.</p>
            </div>

            <h2 className={styles.subheading}>Why Understanding Matters to Me</h2>
            <div className={styles.storyText}>
              <p>
                Living with hearing loss taught me that accommodations
                don&apos;t always remove barriers. A hearing aid amplifies
                sound—it doesn&apos;t create typical hearing. Understanding
                the person&apos;s experience matters more than assumptions.
              </p>
              <p>That lesson extends to every child and every family.</p>
              <p>
                Before deciding what someone needs, listen. Before assuming
                why a child is struggling, ask questions. Before trying to
                support someone, understand their experience.
              </p>
            </div>
            <QuoteBlock cite="Courtney Pedersen">
              I will take the time to listen until I understand. Because
              before I can support you or your child, I need to understand
              what you&apos;re experiencing and what you need.
            </QuoteBlock>

            <h2 className={styles.subheading}>A Lifelong Learner</h2>
            <div className={styles.storyText}>
              <p>I don&apos;t have all the answers, and I don&apos;t pretend that I do.</p>
              <p>
                Education changes. Research evolves. Policies and laws
                change. Our understanding of disability, accessibility,
                learning, and human development continues to grow.
              </p>
              <p>
                If I&apos;m going to educate, advocate, coach, or support
                other people, I have a responsibility to keep learning.
              </p>
              <p>
                And when someone asks me something I don&apos;t know,
                I&apos;m comfortable saying, &ldquo;I don&apos;t know the
                answer to that yet. Let me find out.&rdquo;
              </p>
            </div>

            <div className={`card ${styles.teacherBox}`}>
              <Image
                src="/images/15_About_Teacher_Story_Tree_Lantern.png"
                alt="A tree and lantern representing the teacher story"
                width={600}
                height={300}
                className={styles.teacherImage}
              />
              <h3>The Teacher I Always Wanted to Be</h3>
              <p>I always wanted to be a teacher.</p>
              <p>
                Life didn&apos;t take me there in the way I expected, but
                through The Understanding Tree™, I get to educate children,
                parents, educators, and others. I get to share what
                I&apos;ve learned. I get to keep learning alongside them.
              </p>
              <p className="accent-copy">
                My path didn&apos;t take me there in the way I expected. But
                through The Understanding Tree™, I still get to teach.
              </p>
            </div>
          </div>

          <aside className={styles.sideCol}>
            <div className={`card ${styles.sideCard}`}>
              <h2 className={styles.sideHeading}>Credentials &amp; Training</h2>
              <Divider center={false} />
              <ul className={styles.credentialList}>
                {CREDENTIALS.map((c) => (
                  <li key={c.title}>
                    <h3>{c.title}</h3>
                    <p>{c.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`card ${styles.sideCard}`}>
              <h2 className={styles.sideHeading}>What Guides Me</h2>
              <Divider center={false} />
              <ul className={styles.guideList}>
                {GUIDES.map((g) => (
                  <li key={g.title}>
                    <h3>{g.title}</h3>
                    <p>{g.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-tint">
        <div className={`container reading-width ${styles.mpv}`}>
          <Image
            src="/images/16_Mission_Purpose_Vision_Hero_Tree.png"
            alt="The Understanding Tree — Mission, Purpose, and Vision"
            width={800}
            height={400}
            className={styles.mpvImage}
          />
          <span className="eyebrow">Mission • Purpose • Vision</span>
          <p className="flag-note">
            [MISSION, PURPOSE &amp; VISION — TO BE PROVIDED] Courtney&apos;s
            approved exact wording for the Mission, Purpose, and Vision
            statements (and Legacy Statement) was referenced in the build
            spec but not yet supplied. This section is reserved and will
            use that wording verbatim once provided — nothing has been
            drafted or invented in its place.
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className={`container ${styles.ctaBanner}`}>
          <div>
            <h2>Understanding changes everything.</h2>
            <p>If you&apos;re ready to take the next step, I&apos;d love to hear from you.</p>
          </div>
          <Link href="/contact" className="btn btn-on-dark">
            Let&apos;s Connect
          </Link>
        </div>
      </section>
    </>
  );
}
