import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/SimpifyAgri_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.navHeader}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
        <span className={styles.logoText}>Simplify Agri</span>
      </div>
      <nav className={styles.navLinks}>
        <Link to={"/"} className={styles.navLink}>
          Home
        </Link>
        <Link to={"/about"} className={styles.navLink}>
          About
        </Link>
        <Link to={"/services"} className={styles.navLink}>
          Services
        </Link>
        <Link to={"/careers"} className={styles.navLink}>
          Careers
        </Link>
      </nav>
      <div>
        <Link to={"/contact"} className={styles.contactLink}>
          Contact Us
        </Link>
      </div>
    </header>
  );
}

export default Header;
