import React from "react";
import "./Contact.css";
import { Mail, Phone, MapPin } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contactInfo = {
  email: "engineeridrees8090@gmail.com",
  phone: "+923156499631",
  location: "Pakistan",
};

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
              <Mail size={20} />
            </span>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">{contactInfo.email}</div>
            </div>
          </div>

          <div className="contact-row">
            <span className="icon-badge">
              <Phone size={20} />
            </span>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">{contactInfo.phone}</div>
            </div>
          </div>

          <div className="contact-row">
            <span className="icon-badge">
              <MapPin size={20} />
            </span>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-value">{contactInfo.location}</div>
            </div>
          </div>

          <hr className="contact-divider" />

          <div className="connect-title">Connect with me</div>
          <div className="connect-links">
            <a href="https://github.com/idreestech1" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B5N7Y0n6lSdKJGXgRAdPULw%3D%3D"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}