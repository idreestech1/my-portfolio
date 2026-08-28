import React from "react";
import "./Skills.css";
import {
  Code2,
  FileType2,
  Atom,
  Server,
  Database,
  Box,
  Globe,
  Layers,
  FileCode,
  Palette,
  Wind,
  Layout,
  Flame,
  GitBranch,
  Terminal,
  Network,
  Cloud,
  Container,
  Table2,
} from "lucide-react";

const skills = [
  { name: "JavaScript",  Icon: Code2,        color: "#f0db4f", text: "#111" },
  { name: "TypeScript",  Icon: FileType2,    color: "#3178c6" },
  { name: "React",       Icon: Atom,         color: "#61dafb", text: "#111" },
  { name: "Node.js",     Icon: Server,       color: "#3c873a" },
  { name: "MongoDB",     Icon: Database,     color: "#47a248" },
  { name: "Express.js",  Icon: Box,          color: "#444" },
  { name: "Next.js",     Icon: Globe,        color: "#000" },
  { name: "Redux",       Icon: Layers,       color: "#764abc" },
  { name: "HTML5",       Icon: FileCode,     color: "#e34f26" },
  { name: "CSS3",        Icon: Palette,      color: "#2965f1" },
  { name: "Tailwind CSS",Icon: Wind,         color: "#06b6d4", text: "#111" },
  { name: "Material UI", Icon: Layout,       color: "#0081cb" },
  { name: "Firebase",    Icon: Flame,        color: "#ffca28", text: "#111" },
  { name: "Git",         Icon: GitBranch,    color: "#f05032" },
  { name: "GitHub",      Icon: GitBranch,    color: "#181717" },
  { name: "Python",      Icon: Terminal,     color: "#3776ab" },
  { name: "REST API",    Icon: Network,      color: "#e10098" },
  { name: "AWS",         Icon: Cloud,        color: "#ff9900", text: "#111" },
  { name: "Docker",      Icon: Container,    color: "#2496ed" },
  { name: "PostgreSQL",  Icon: Table2,       color: "#336791" },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills &amp; Technologies</h2>
      <div className="section-underline" />

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span
              className="skill-icon"
              style={{
                background: skill.color,
                color: skill.text || "#fff",
              }}
            >
              <skill.Icon size={22} strokeWidth={1.75} />
            </span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}