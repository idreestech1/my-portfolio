import React from "react";
import "./Certificates.css";
import {
  Code2,
  ShieldCheck,
  Laptop,
  Globe,
  Settings,
  BookOpen,
  Briefcase,
} from "lucide-react";

const certificates = [
  {
    icon: <Code2 size={20} />,
    title: "Modern Web And Mobile Application Development",
    issuer: "Saylani Mass IT Training Center",
    description:
      "Learned Modern Web and Mobile Application Development for innovative, scalable, and user-friendly digital solutions.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Web Graphics and Mobile App Development",
    issuer: "Saylani Mass IT Training Center",
    description:
      "Learned UI/UX design principles and basics of mobile app development.",
  },
  {
    icon: <Settings size={20} />,
    title: "English Language",
    issuer: "English Language center",
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