import React, { useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/SimpifyAgri_logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.navHeader}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
        <span className={styles.logoText}>Simplify Agri</span>
      </div>

      <button className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <Link
          to="/"
          className={styles.navLink}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <a
          href="#about"
          className={styles.navLink}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#services"
          className={styles.navLink}
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>
        <Link
          to="/careers"
          className={styles.navLink}
          onClick={() => setMenuOpen(false)}
        >
          Careers
        </Link>
        <Link
          to="/contact"
          className={`${styles.contactLink} ${styles.mobileContact}`}
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>
      </nav>

      <div className={styles.desktopContact}>
        <Link to="/contact" className={styles.contactLink}>
          Contact Us
        </Link>
      </div>
    </header>
  );
}

export default Header;
