import React from "react";
import "./Skills.css";

/* ============================================
   Skill list
   Each skill uses a simple colored letter badge
   as a placeholder icon so no icon library is
   required. Swap `icon` for a real logo/icon
   whenever you like — e.g. from react-icons:

     import { FaReact } from "react-icons/fa";
     ...
     <FaReact />

   just replace the <span className="skill-icon"> block.
   ============================================ */
const skills = [
  { name: "JavaScript", icon: "JS", color: "#f0db4f", text: "#111" },
  { name: "TypeScript", icon: "TS", color: "#3178c6" },
  { name: "React", icon: "⚛", color: "#61dafb", text: "#111" },
  { name: "Node.js", icon: "N", color: "#3c873a" },
  { name: "MongoDB", icon: "M", color: "#47a248" },
  { name: "Express.js", icon: "ex", color: "#333" },
  { name: "Next.js", icon: "N", color: "#000" },
  { name: "Redux", icon: "Rx", color: "#764abc" },
  { name: "HTML5", icon: "5", color: "#e34f26" },
  { name: "CSS3", icon: "3", color: "#2965f1" },
  { name: "Tailwind CSS", icon: "~", color: "#06b6d4" },
  { name: "Material UI", icon: "UI", color: "#0081cb" },
  { name: "Firebase", icon: "Fb", color: "#ffca28", text: "#111" },
  { name: "Git", icon: "Git", color: "#f05032" },
  { name: "GitHub", icon: "Gh", color: "#181717" },
  { name: "Python", icon: "Py", color: "#3776ab" },
  { name: "REST API", icon: "API", color: "#e10098" },
  { name: "AWS", icon: "AWS", color: "#ff9900", text: "#111" },
  { name: "Docker", icon: "Do", color: "#2496ed" },
  { name: "PostgreSQL", icon: "Pg", color: "#336791" },
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
              {skill.icon}
            </span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}