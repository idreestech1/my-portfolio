import React from "react";
import "./Hero.css";
import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
    <path d="M20.46 3.54A11.82 11.82 0 0 0 12.05 0C5.48 0 .11 5.37.11 11.95c0 2.1.55 4.14 1.59 5.96L0 24l6.34-1.65A11.9 11.9 0 0 0 12.05 24c6.57 0 11.94-5.37 11.94-11.95 0-3.19-1.24-6.2-3.53-8.51ZM12.05 21.9h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.76 1 1-3.67-.24-.37A9.84 9.84 0 0 1 2.1 12c0-5.44 4.43-9.87 9.95-9.87a9.8 9.8 0 0 1 6.97 2.9 9.8 9.8 0 0 1 2.9 6.98c0 5.44-4.43 9.87-9.95 9.87Zm5.47-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.06-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.06 2.89 1.2 3.08c.15.2 2.08 3.17 5.04 4.45.7.3 1.25.48 1.68.62.71.22 1.35.18 1.87.11.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35Z"/>
  </svg>
);

export default function Hero() {
  return (
    <main className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Software Engineer &amp; Tech Lead</p>
        <h1>Hi, I&apos;m Idrees Ud Din</h1>
        <h2>Full Stack Developer</h2>
        <p className="bio">
          I build scalable, production-ready web applications and turn ideas into reliable digital solutions. Passionate about full-stack development, problem-solving, and creating impactful technology.
        </p>

        <div className="actions">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#projects" className="btn btn-outline">View Projects</a>
        </div>

        <div className="socials">
          <a href="https://github.com/idreestech1" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B5N7Y0n6lSdKJGXgRAdPULw%3D%3D"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a href="mailto:engineeridrees8090@gmail.com?subject=Portfolio%20Inquiry" aria-label="Email">
            <Mail size={22} />
          </a>
          <a href="https://wa.me/923156499631?text=Hello%20Idrees%2C%20I%20want%20to%20connect%20with%20you." aria-label="WhatsApp">
            <WhatsAppIcon />
          </a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-photo">
          <img src="./idrees.jpeg" alt="Idrees Ud Din Profile Image" />
        </div>
      </div>
    </main>
  );
}