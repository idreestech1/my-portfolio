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
  const isClickScrolling = React.useRef(false);

  // Scroll-spy: update active nav link based on which section is in view
  useEffect(() => {
    const sectionIds = navLinks.map(({ href }) => href.replace("#", ""));

    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        // Skip if user clicked a nav link (let the click handler own state temporarily)
        if (isClickScrolling.current) return;

        // Find the entry closest to the top of the viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          const matched = navLinks.find(({ href }) => href === `#${id}`);
          if (matched) setActive(matched.label);
        }
      },
      {
        // Trigger when the section top enters/leaves the upper 25% of the viewport
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Mobile menu escape-key / body-scroll-lock
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

    // Pause scroll-spy while the smooth scroll animation runs (~800 ms)
    isClickScrolling.current = true;
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);

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