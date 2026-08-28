import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <main className="hero">
      <div>
        <p className="eyebrow">Software Engineer &amp; Tech Lead</p>
        <h1>Hi, I&apos;m Ibrahim Khan</h1>
        <h2>Full Stack Developer</h2>
        <p className="bio">
          I build scalable, production-ready web applications and lead
          engineering teams. Passionate about bridging business goals with
          technical solutions.
        </p>

        <div className="actions">
          <button className="btn btn-primary">Get in Touch</button>
          <button className="btn btn-outline">View Projects</button>
        </div>

        <div className="socials">
          <a href="#" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 5L2 7" />
            </svg>
          </a>
          <a href="#" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ============================================
          Hero photo
          Replace the placeholder image below with your
          own photo. Two ways to do it:

          1) Import a local image and use it:
             import myPhoto from "./assets/my-photo.jpg";
             ...
             <img src={myPhoto} alt="Ibrahim Khan" />

          2) Point straight to a file in your public folder:
             <img src="/images/my-photo.jpg" alt="Ibrahim Khan" />
         ============================================ */}
      <div className="hero-photo-wrap">
        <div className="hero-photo">
          {/* TODO: replace src below with your own image */}
          <img
            src="https://placehold.co/380x380?text=Your+Photo"
            alt="Ibrahim Khan"
          />
        </div>
      </div>
    </main>
  );
}