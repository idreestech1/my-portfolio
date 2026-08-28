import React from "react";
import "./Projects.css";

/* ============================================
   Project list
   Each project uses a placeholder thumbnail image.
   Replace `image` with your own screenshot:

     1) Local import:
        import jobplus from "./assets/jobplus.png";
        ...
        image: jobplus

     2) Public folder path:
        image: "/images/jobplus.png"
   ============================================ */
const projects = [
  {
    title: "Founder - JobPlus",
    description:
      "JobPlus is a job posting and application platform I founded, connecting schools, students, and tech professionals. Built using React, Redux, and Node.js, the platform...",
    tags: ["TypeScript", "React", "Redux", "Node.js"],
    // TODO: replace with your project screenshot
    image: "https://placehold.co/600x375?text=JobPlus",
  },
  {
    title: "Founder - Personal Smart AI",
    description:
      "Build an intelligent content creation platform capable of generating high-quality articles, blogs, and AI-powered images using advanced...",
    tags: ["JavaScript", "React", "Redux", "PostgreSQL", "Neon", "OpenAI"],
    // TODO: replace with your project screenshot
    image: "https://placehold.co/600x375?text=Personal+AI",
  },
  {
    title: "CapsPro - E-commerce Platform",
    description:
      "Developed a fully functional e-commerce platform with Next.js frontend and real-time admin panel powered by Socket.io. Features...",
    tags: ["Next.js", "React", "Node.js", "Socket.io", "MongoDB", "AWS"],
    // TODO: replace with your project screenshot
    image: "https://placehold.co/600x375?text=CapsPro",
  },
  {
    title: "Project Title 4",
    description: "Short description of this project goes here.",
    tags: ["React", "Node.js"],
    // TODO: replace with your project screenshot
    image: "https://placehold.co/600x375?text=Project+4",
  },
  {
    title: "Project Title 5",
    description: "Short description of this project goes here.",
    tags: ["React", "Node.js"],
    // TODO: replace with your project screenshot
    image: "https://placehold.co/600x375?text=Project+5",
  },
  {
    title: "Project Title 6",
    description: "Short description of this project goes here.",
    tags: ["React", "Node.js"],
    // TODO: replace with your project screenshot
    image: "https://placehold.co/600x375?text=Project+6",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="section-underline" />

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-thumb">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
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