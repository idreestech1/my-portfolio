import React from "react";
import "./Contact.css";

/* ============================================
   Contact info only — no form, since a working
   form needs a backend (or a service like
   Formspree / EmailJS) to actually send messages.
   Update the values below with your real details.
   ============================================ */
const contactInfo = {
  email: "ibrahimsheikh772@gmail.com",
  phone: "+923431223329",
  location: "Pakistan",
};

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-underline" />

      <div className="contact-wrap">
        <div className="contact-card">
          <h3>Contact Information</h3>

          <div className="contact-row">
            <span className="icon-badge">
              <EmailIcon />
            </span>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">{contactInfo.email}</div>
            </div>
          </div>

          <div className="contact-row">
            <span className="icon-badge">
              <PhoneIcon />
            </span>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">{contactInfo.phone}</div>
            </div>
          </div>

          <div className="contact-row">
            <span className="icon-badge">
              <PinIcon />
            </span>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-value">{contactInfo.location}</div>
            </div>
          </div>

          <hr className="contact-divider" />

          <div className="connect-title">Connect with me</div>
          <div className="connect-links">
            <a href="#" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}