import React, { useEffect, useState } from "react";
import "./Header.css";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigation = (event, label, href) => {
    event.preventDefault();
    setActive(label);
    setIsMenuOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    window.history.pushState({}, "", href);
    window.requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
  };

  return (
    <header className="navbar">
      <nav className="nav-inner">
        <a
          className="logo"
          href="#home"
          onClick={(event) => handleNavigation(event, "Home", "#home")}
        >
          {"<Idrees Ud Din />"}
        </a>

        <ul className="nav-links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                className={active === label ? "active" : ""}
                href={href}
                onClick={(event) => handleNavigation(event, label, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      <button
        className={`menu-backdrop ${isMenuOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        id="mobile-navigation"
        className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-header">
          <span>Navigation</span>
          <button
            className="menu-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                className={active === label ? "active" : ""}
                href={href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={(event) => handleNavigation(event, label, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
}