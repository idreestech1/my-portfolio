import React from "react";
import "./About.css";
import { GraduationCap, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="section-underline" />

      <div className="about-grid">
        {/* Who I Am */}
        <div className="card about-text">
          <h3>Who I Am</h3>
          <p>
            I'm a Full-Stack Developer specializing in building modern,
            scalable web applications. I have experience developing projects
            from frontend to backend, working with APIs, databases, authentication,
            and collaborative development using Git and GitHub.
          </p>
          <p>
            I enjoy turning ideas into practical digital solutions,
            solving real-world problems through technology, and continuously
            improving my skills to build reliable and user-focused applications.
          </p>
        </div>

        {/* Education */}
        <div className="card">
          <div className="card-title-row">
            <span className="icon-badge">
              <GraduationCap size={20} />
            </span>
            <h3>Education</h3>
          </div>

          <div className="edu-item">
            <h4>The University of Agriculture Peshawar, Pakistan</h4>
            <p className="edu-detail">
              <BookOpen size={16} />
              Bachelor of Science in Computer Science
            </p>
            <span className="edu-year">2023 - 2027</span>
          </div>

          <div className="edu-item">
            <h4>Saylani Mass IT Training (SMIT)</h4>
            <p className="edu-detail">
              <BookOpen size={16} />
              Modern web and mobile development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}