import type { Metadata } from "next";
import Image from "next/image";
import Accordion, { type AccordionSection } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Legal & Transparency",
  description:
    "Legal disclosures, privacy information, and AI transparency for The Understanding Tree™.",
};

const SECTIONS: AccordionSection[] = [
  {
    id: "educational-disclaimer",
    title: "Educational & General Information Disclaimer",
    content: (
      <>
        <p>
          Content on this website — including the Program, Institute
          resources, and blog articles — is provided for general
          educational and informational purposes only. It is not a
          substitute for individualized evaluation, professional advice, or
          services from a qualified provider.
        </p>
        <p>
          Every child, learner, family, and workplace is different.
          Information shared here should be considered a starting point for
          your own research and conversations, not a prescription.
        </p>
      </>
    ),
  },
  {
    id: "advocacy-disclaimer",
    title: "Advocacy & Legal Disclaimer",
    content: (
      <>
        <p>
          The Understanding Tree Advocacy™ provides educational advocacy,
          information, preparation, and support to families navigating the
          special education process.
        </p>
        <p>
          Courtney Pedersen is not an attorney and does not provide legal
          advice or legal representation. Nothing on this website, or
          shared during an advocacy conversation, should be understood as
          legal advice. Parents and guardians remain the final
          decision-makers for their child at all times.
        </p>
      </>
    ),
  },
  {
    id: "clinical-disclaimer",
    title: "Clinical & Therapeutic Disclaimer",
    content: (
      <>
        <p>
          The Understanding Tree™ does not provide therapy, counseling,
          medical care, psychological evaluation, or diagnosis. Courtney
          Pedersen is not a licensed therapist, psychologist, or medical
          provider.
        </p>
        <p>
          If you or your child need clinical or medical support, please
          consult a licensed professional.
        </p>
      </>
    ),
  },
  {
    id: "no-guarantees",
    title: "No Guarantees",
    content: (
      <p>
        We do not guarantee specific outcomes, results, IEP decisions, or
        academic, behavioral, or developmental progress. Every situation is
        unique, and outcomes depend on many factors outside our control.
      </p>
    ),
  },
  {
    id: "inquiry-document-policy",
    title: "Inquiry & Document Policy",
    content: (
      <>
        <p>
          Please do not include confidential student records, medical
          information, student identification numbers, dates of birth, or
          other sensitive personal information in any form on this website.
        </p>
        <p>
          Documents (such as IEPs or evaluations) should not be submitted
          through the website. If documents are needed after an initial
          conversation, instructions will be provided separately.
        </p>
        <p className="flag-note">
          [SECURE DOCUMENT PROCESS — TO BE DETERMINED] A finalized secure
          document-transfer system has not yet been established. No claims
          about encryption or document security are made until that system
          is in place.
        </p>
      </>
    ),
  },
  {
    id: "privacy-policy",
    title: "Website Privacy",
    content: (
      <>
        <p>
          We collect only the information you choose to share with us, such
          as your name, email address, and message, when you submit a form
          on this site. We use this information to respond to your
          inquiry.
        </p>
        <p>
          We do not sell personal information. This website may use basic,
          privacy-conscious analytics to understand overall site usage.
        </p>
        <p className="flag-note">
          This privacy language is draft copy pending attorney review and
          does not yet make specific legal claims (e.g., HIPAA, FERPA,
          CCPA/GDPR compliance). A finalized policy will be published once
          reviewed.
        </p>
      </>
    ),
  },
  {
    id: "ai-transparency",
    title: "AI Transparency",
    content: (
      <>
        <p>
          <strong>Written materials:</strong> Created and directed by
          Courtney Pedersen, with AI-assisted drafting and editorial
          support.
        </p>
        <p>
          <strong>Illustrations:</strong> Concept and creative direction by
          Courtney Pedersen. Illustrations created with AI assistance.
        </p>
        <p>
          The Understanding Tree™ uses AI tools as part of its creative and
          editorial process, under Courtney&apos;s direction and review —
          not as a replacement for her voice, judgment, or expertise.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <p>
        The Understanding Tree™, The Understanding Tree Program™, The
        Understanding Tree Advocacy™, The Understanding Tree Institute™,
        associated logos, illustrations, and original written content are
        the property of Courtney Pedersen / The Understanding Tree™ and may
        not be reproduced without permission.
      </p>
    ),
  },
  {
    id: "external-links",
    title: "External Information & Links",
    content: (
      <p>
        This website may reference or link to third-party organizations,
        laws, or resources (for example, special education law
        information) for convenience. We do not control and are not
        responsible for the content or accuracy of external websites.
      </p>
    ),
  },
  {
    id: "accessibility",
    title: "Accessibility",
    content: (
      <>
        <p>
          We are committed to making this website usable for as many
          visitors as possible, including keyboard navigation, readable
          contrast, descriptive text alternatives, and support for
          reduced-motion preferences.
        </p>
        <p>
          If you encounter an accessibility barrier on this site, please
          let us know through the Contact page so we can address it.
        </p>
      </>
    ),
  },
  {
    id: "corrections-updates",
    title: "Corrections & Updates",
    content: (
      <p>
        This website, including this Legal &amp; Transparency page, may be
        updated as The Understanding Tree™ grows, as services are
        finalized, and following attorney review. Material changes will be
        reflected here.
      </p>
    ),
  },
];

export default function LegalPage() {
  return (
    <>
      <section>
        <div className="container">
          <Image
            src="/images/17_Legal_Transparency_Hero_Tree.png"
            alt="Legal & Transparency hero: lantern, books, and warm botanical light"
            width={1200}
            height={450}
            priority
            className="legal-hero-img"
          />
          <div style={{ marginTop: "2rem" }}>
            <span className="eyebrow">Legal &amp; Transparency</span>
            <h1>Legal &amp; Transparency</h1>
            <p className="form-note reading-width" style={{ marginTop: "1rem" }}>
              The design of this page is approved. The legal and privacy
              copy below is <strong>draft language pending attorney
              review</strong> and should not be treated as final until
              Courtney Pedersen confirms it with legal counsel.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container reading-width">
          <Accordion sections={SECTIONS} />
        </div>
      </section>
    </>
  );
}
