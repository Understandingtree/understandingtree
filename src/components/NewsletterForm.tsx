"use client";

import { useState } from "react";
import styles from "./NewsletterForm.module.css";

/**
 * NOTE: Not yet connected to an email service provider — swap in a real
 * subscribe endpoint (e.g. Mailchimp, ConvertKit) once one is chosen.
 */
export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="form-success" role="status">
        You&apos;re on the list — thank you for growing with us.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <label htmlFor="newsletter-email" className="visually-hidden">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        placeholder="Your email address"
        required
        autoComplete="email"
        className={styles.input}
      />
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </form>
  );
}
