import React from "react";
import "./Experience.css";

const experience = [
  {
    period: "Jan 2026 - Present",
    location: "Hybrid",
    type: "Full-time",
    title: "Full Stack Developer - Fintech",
    company: "Instapay",
    description:
      "Building scalable fintech solutions for secure payments and banking integrations. Working on systems supporting large user bases and high-volume transaction workflows. Integrating Plaid API with webhook-based real-time updates for seamless payment processing. Developing REST APIs with JWT authentication for secure financial transactions. Implementing payment gateway integrations and optimizing backend performance for mission-critical applications.",
    tags: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Plaid API",
      "JWT",
      "REST API",
    ],
  },
  {
    period: "Mar 2024 - Present",
    location: "Onsite",
    type: "Part-time",
    title: "Lead Trainer – Software Engineering",
    company: "Saylani Mass IT Training (SMIT)",
    description:
      "Leading a cohort of students through modern full-stack web development, from fundamentals to production-ready applications. Designing course material, reviewing projects, and mentoring students on best practices, debugging, and career readiness.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "Mentoring"],
  },
];

/* Small inline icon set (calendar, pin, briefcase) so no icon
   library is required — same approach as Header/Hero. */
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="section-underline" />

      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline-item" key={job.title}>
            <span className="timeline-dot" />
            <div className="exp-card">
              <div className="exp-meta">
                <span className="exp-meta-item">
                  <CalendarIcon />
                  {job.period}
                </span>
                <span className="exp-meta-item">
                  <PinIcon />
                  {job.location}
                </span>
                <span className="exp-badge">{job.type}</span>
              </div>

              <h3 className="exp-title">{job.title}</h3>
              <p className="exp-company">
                <BriefcaseIcon />
                {job.company}
              </p>

              <p className="exp-desc">{job.description}</p>

              <div className="exp-tags">
                {job.tags.map((tag) => (
                  <span className="exp-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}