import React from "react";
import styles from "./about.module.css";
import img1 from "../../assets/abt_image1.png";
import img2 from "../../assets/abt_image2.png";
import img3 from "../../assets/abt_image3.png";

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.topImages}>
        <img src={img1} alt="Tech in Farming" className={styles.topLeft} />
        <img src={img1} alt="Tablet with AI" className={styles.topRight} />
      </div>

      <div className={styles.content}>
        <p className={styles.tag}>● About Simplifyagri</p>
        <h2>Who we are?</h2>
        <p className={styles.description}>
          At Simplify Agri, we are a passionate <br/>
           team on a mission to <span className={styles.highlight}> upskill farmers </span> and enable wealth creation through 
          <span className={styles.highlight}> smart, accessible technology</span>. Our vision is to transform agriculture by 
          simplifying <span className={styles.highlight}>daily farming activities</span>, 
          <span className={styles.highlight}> optimizing production</span>, and 
          <span className={styles.highlight}> enhancing market access</span> - with the farmer at the  <br/>
         core of innovation.</p>
        
        <button className={styles.learnMore}>
          Learn more about us →
        </button>
      </div>

      <div className={styles.bottomImages}>
        <img src={img2} alt="Farming Machines" className={styles.bottomLeft} />
        <img src={img3} alt="Drone View" className={styles.bottomRight} />
      </div>
    </section>
  );
}

export default About;
