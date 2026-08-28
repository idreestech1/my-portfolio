import React from "react";
import "./About.css";

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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
              </svg>
            </span>
            <h3>Education</h3>
          </div>

          <div className="edu-item">
            <h4>The University of Agriculture Peshawar, Pakistan</h4>
            <p className="edu-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
              </svg>
              Bachelor of Science in Computer Science
            </p>
            <span className="edu-year">2023 - 2027</span>
          </div>

          <div className="edu-item">
            <h4>Saylani Mass IT Training (SMIT)</h4>
            <p className="edu-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
              </svg>
              Modern web and mobile development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}