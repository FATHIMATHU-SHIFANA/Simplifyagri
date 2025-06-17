import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      {/* Call-to-Action */}
      <div className={styles.ctaSection}>
        <h2>
          Ready to take your farm
          <br />
          to the next level
        </h2>
        <div className={styles.subscribe}>
          <input type="email" placeholder="Enter your Email" />
          <button>
            Send <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.leftSection}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <p>
              Connecting farmers with expert knowledge and smart technology for
              a brighter, more profitable future in agriculture.
            </p>
            <div className={styles.socials}>
              <span className={styles.icon}>
                <FaInstagram />
              </span>
              <span className={styles.icon}>
                <FaFacebookF />
              </span>
              <span className={styles.icon}>
                <FaYoutube />
              </span>
              <span className={styles.icon}>
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Address</h4>
            <p>
              Koottupaatha,
              <br />
              Palakkad, Kerala
              <br />
              678551
            </p>
          </div>

          <div className={styles.column}>
            <h4>Contact</h4>
            <p>
              <span className={styles.contactIcon}>
                <FaPhoneAlt />
              </span>
              79073 35177
            </p>
            <p>
        
              <span className={styles.contactIcon}>
                <FaEnvelope />
              </span>
              info@simplifyagri.com
            </p>
          </div>
        </div>

        <div className={styles.copyright}>Copyright 2025 © Simplifyagri</div>
      </footer>
    </div>
  );
};

export default Footer;
