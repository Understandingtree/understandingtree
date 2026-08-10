import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Divider from "@/components/ui/Divider";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach The Understanding Tree™ about the Program, Advocacy, Institute, or a partnership — general and Program inquiries welcome.",
};

export default function ContactPage() {
  return (
    <section>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Let&apos;s Connect</h1>
          <Divider center={false} />
          <p className="reading-width">
            Whether you have a question about the Program, need Advocacy
            support, are curious about the Institute, or want to explore a
            partnership — we&apos;d love to hear from you.
          </p>

          <div className={styles.infoBlock}>
            <h2>How We&apos;ll Respond</h2>
            <p>
              After you submit this form, Courtney (or her team) will reach
              out to continue the conversation, answer your questions, and
              determine next steps together.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h2>A Note on Privacy</h2>
            <p>
              We don&apos;t publish a direct personal email or phone number
              on this site. Please use the form below and we&apos;ll follow
              up promptly.
            </p>
            <p>
              Please do not include confidential student records, medical
              information, student identification numbers, dates of birth,
              or other sensitive personal information in this form.
              Documents should not be submitted through the website. If
              documents are needed after we speak, instructions will be
              provided separately.
            </p>
          </div>
        </div>

        <div className={`card ${styles.formCard}`}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
