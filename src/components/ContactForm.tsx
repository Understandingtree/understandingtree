"use client";

import { useState } from "react";

const INQUIRY_TYPES = [
  "General",
  "Program",
  "Advocacy",
  "Institute",
  "Professional Development",
  "School / District Training",
  "Speaking",
  "Partnership / Collaboration",
];

/**
 * NOTE: This form does not yet submit to a live inbox or CRM — no email
 * service is connected. Wire the onSubmit handler up to whatever service
 * Courtney chooses (e.g. Formspree, Resend) once credentials are available.
 */
export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState(INQUIRY_TYPES[0]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="form-success" role="status">
        Thank you for reaching out. We typically respond within 2–3 business
        days. If your inquiry is time-sensitive, please note that in a
        follow-up message.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="form-field">
        <label htmlFor="inquiryType">What can we help with?</label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={inquiryType}
          onChange={(event) => setInquiryType(event.target.value)}
        >
          {INQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>

      {inquiryType === "Advocacy" ? (
        <p className="form-note" role="note">
          Please do not include confidential student records, medical
          information, student identification numbers, dates of birth, or
          other sensitive personal information in this form. Documents
          should not be submitted through the website. If documents are
          needed after we speak, instructions will be provided separately.
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary">
        Send Inquiry
      </button>
    </form>
  );
}
