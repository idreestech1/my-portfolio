import React from "react";
import "./Experience.css";
import { Calendar, MapPin, Briefcase, Tag } from "lucide-react";

const experience = [
  {
    period: "July 2026 - Present",
    location: "Hybrid",
    type: "Full-time",
    title: "Full-Stack Developer — Bootcamp",
    company: "Saylani Mass IT Training Center",
    description:
      "Building real-world web applications as part of an intensive full-stack development bootcamp. Working on end-to-end projects using modern web technologies, collaborating with team members through Git and GitHub, and applying industry-level development practices. Developing frontend and backend features, integrating APIs, managing databases, and improving applications through teamwork and continuous learning.",
    tags: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Git",
      "GitHub",
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
                  <Calendar size={15} />
                  {job.period}
                </span>
                <span className="exp-meta-item">
                  <MapPin size={15} />
                  {job.location}
                </span>
                <span className="exp-badge">{job.type}</span>
              </div>

              <h3 className="exp-title">{job.title}</h3>
              <p className="exp-company">
                <Briefcase size={15} />
                {job.company}
              </p>

              <p className="exp-desc">{job.description}</p>

              <div className="exp-tags">
                {job.tags.map((tag) => (
                  <span className="exp-tag" key={tag}>
                    <Tag size={13} aria-hidden="true" />
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