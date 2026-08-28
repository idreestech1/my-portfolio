import React, { useState } from "react";
import "./Header.css";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certificates",
  "Contact",
];

export default function Header() {
  const [active, setActive] = useState("Home");

  return (
    <header className="navbar">
      <nav className="nav-inner">
        <span className="logo">{"<Idrees Ud Din />"}</span>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                className={active === link ? "active" : ""}
                onClick={() => setActive(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}