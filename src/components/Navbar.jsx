import { useState } from "react";
import { NavLink } from "react-router-dom";

const navBarNames = {
  home: "Hem",
  about: "Om mig",
  skills: "Kompetenser",
  cv: "CV",
  projects: "Projekt",
  contact: "Kontakt",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const title = "Isak Erbing - Portfolio";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navtitle">
        <h1>{title}</h1>
      </div>

      <button className="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? "\u2715" : "\u2630"}
      </button>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink end to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>{navBarNames.home}</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>{navBarNames.about}</NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>{navBarNames.skills}</NavLink>
        </li>
        <li>
          <NavLink to="/cv" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>{navBarNames.cv}</NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>{navBarNames.projects}</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>{navBarNames.contact}</NavLink>
        </li>
      </ul>
    </nav>
  );
}