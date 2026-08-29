import React from "react";
import "./Projects.css";
import { Tag } from "lucide-react";

const projects = [
  {
    title: "PollHub — Polling & Voting Platform",
    description:
      "PollHub is a full-stack MERN polling platform with real-time voting, animated analytics, JWT auth, OTP password reset, and social features like likes, comments, and notifications. Built with React, Node.js, Express, MongoDB, Cloudinary, and Tailwind CSS, it includes advanced search, user profiles, and a responsive mobile-first UI.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Recharts", "Cloudinary"],
    image: "/pollhub.png", // ✅ Correct public folder path (file is in public/)
    link: "https://polify-application-fullstack-n8a4.vercel.app/",
  },
  {
    title: "Founder - Personal Smart AI",
    description:
      "Build an intelligent content creation platform capable of generating high-quality articles, blogs, and AI-powered images using advanced...",
    tags: ["JavaScript", "React", "Redux", "PostgreSQL", "Neon", "OpenAI"],
    image: "https://placehold.co/600x375?text=Personal+AI",
    link: "", // Add your live link here when ready
  },
  {
    title: "CapsPro - E-commerce Platform",
    description:
      "Developed a fully functional e-commerce platform with Next.js frontend and real-time admin panel powered by Socket.io. Features...",
    tags: ["Next.js", "React", "Node.js", "Socket.io", "MongoDB", "AWS"],
    image: "https://placehold.co/600x375?text=CapsPro",
    link: "", // Add your live link here when ready
  },
  // Add links to other projects as needed
  {
    title: "Project Title 4",
    description: "Short description of this project goes here.",
    tags: ["React", "Node.js"],
    image: "https://placehold.co/600x375?text=Project+4",
    link: "",
  },
  {
    title: "Project Title 5",
    description: "Short description of this project goes here.",
    tags: ["React", "Node.js"],
    image: "https://placehold.co/600x375?text=Project+5",
    link: "",
  },
  {
    title: "Project Title 6",
    description: "Short description of this project goes here.",
    tags: ["React", "Node.js"],
    image: "https://placehold.co/600x375?text=Project+6",
    link: "",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="section-underline" />

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card"
            onClick={() => {
              if (project.link) {
                window.open(project.link, "_blank", "noopener,noreferrer");
              }
            }}
            style={{ cursor: project.link ? "pointer" : "default" }}
          >
            <div className="project-thumb">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
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