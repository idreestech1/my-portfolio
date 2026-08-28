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
    title: "Software Engineering",
    issuer: "Coursera by IBM",
    description:
      "Completed a professional certification in Software Engineering by IBM, covering software development life cycle, version control, APIs,...",
  },
  {
    icon: <BookOpen size={20} />,
    title: "DSA Graduate",
    issuer: "Coursera by Packt",
    description:
      "Completed a professional certification in Data Structures and Algorithms by Packt, covering fundamental and advanced topics in computer...",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Intro to CyberSecurity",
    issuer: "Cisco Networking",
    description:
      "Covered fundamental cybersecurity concepts, threats, and protection techniques.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Web Graphics and Mobile App Development",
    issuer: "NAVTTC",
    description:
      "Learned UI/UX design principles and basics of mobile app development.",
  },
  {
    icon: <Laptop size={20} />,
    title: "Freelancing",
    issuer: "DigiSkills",
    description:
      "Learned freelancing platforms, client dealing, and earning strategies.",
  },
  {
    icon: <Globe size={20} />,
    title: "WordPress",
    issuer: "DigiSkills",
    description:
      "Gained expertise in website creation, customization, and management using WordPress.",
  },
  {
    icon: <Settings size={20} />,
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