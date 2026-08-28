import React from "react";
import "./Certificates.css";

/* Small inline icon set (code, shield, laptop, wordpress-ish, gear)
   so no icon library is required. */
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </svg>
);
const LaptopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="1" />
    <path d="M2 20h20" />
  </svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
  </svg>
);
const GearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const certificates = [
  {
    icon: <CodeIcon />,
    title: "Software Engineering",
    issuer: "Coursera by IBM",
    description:
      "Completed a professional certification in Software Engineering by IBM, covering software development life cycle, version control, APIs,...",
  },
  {
    icon: <CodeIcon />,
    title: "DSA Graduate",
    issuer: "Coursera by Packt",
    description:
      "Completed a professional certification in Data Structures and Algorithms by Packt, covering fundamental and advanced topics in computer...",
  },
  {
    icon: <ShieldIcon />,
    title: "Intro to CyberSecurity",
    issuer: "Cisco Networking",
    description:
      "Covered fundamental cybersecurity concepts, threats, and protection techniques.",
  },
  {
    icon: <CodeIcon />,
    title: "Web Graphics and Mobile App Development",
    issuer: "NAVTTC",
    description:
      "Learned UI/UX design principles and basics of mobile app development.",
  },
  {
    icon: <LaptopIcon />,
    title: "Freelancing",
    issuer: "DigiSkills",
    description:
      "Learned freelancing platforms, client dealing, and earning strategies.",
  },
  {
    icon: <GlobeIcon />,
    title: "WordPress",
    issuer: "DigiSkills",
    description:
      "Gained expertise in website creation, customization, and management using WordPress.",
  },
  {
    icon: <GearIcon />,
    title: "English Language",
    issuer: "DigiSkills",
    description: "Improved professional English communication skills.",
  },
];

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <h2 className="section-title">Certificates &amp; Achievements</h2>
      <div className="section-underline" />

      <div className="certs-grid">
        {certificates.map((cert) => (
          <div className="cert-card" key={cert.title}>
            <div className="cert-header">
              <span className="icon-badge">{cert.icon}</span>
              <h3 className="cert-title">{cert.title}</h3>
            </div>
            <span className="cert-issuer">{cert.issuer}</span>
            <p className="cert-desc">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}