import React from "react";
import Header from "../Header/Header";
import image1 from "../../assets/farm.png";
import image2 from "../../assets/nature.png";
import image3 from "../../assets/crops.png";
import styles from "./home.module.css";

function Home() {
  return (
    <div>
      {/* Header */}
      <div className={styles.headerWrapper}>
        <Header />
      </div>

      {/* Carousel */}
      <div
        className={`${styles.heroSection} carousel slide position-relative`}
        id="carouselExampleCaptions"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className={`carousel-item active ${styles.carouselItem}`}>
            <img src={image1} className="d-block w-100" alt="Farm" />
            <div className={styles.carouselCaption}>
              <div className={styles.leftSection}>
                <h2>Empowering farmers and FPO’s with digital tools</h2>
              </div>
              <div className={styles.rightSection}>
                <p>
                  Empowering farmers and FPOs with digital tools to streamline
                  work, improve decisions, and grow productivity
                </p>
                <button>Get Start Today</button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img src={image2} className="d-block w-100" alt="Nature" />
            <div className={styles.carouselCaption}>
              <div className={styles.leftSection}>
                <h2>From Local to Global: Digitize Your FPO’s Operations</h2>
              </div>
              <div className={styles.rightSection}>
                <p>
                  Transform your FPO with digital tools for markets,
                  traceability, and efficiency.
                </p>
                <button>Get Start Today</button>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className={`carousel-item ${styles.carouselItem}`}>
            <img src={image3} className="d-block w-100" alt="Crops" />
            <div className={styles.carouselCaption}>
              <div className={styles.leftSection}>
                <h2>Upskill farmers using Information Technology</h2>
              </div>
              <div className={styles.rightSection}>
                <p>
                  Bridge the knowledge gap by training farmers in digital
                  literacy and smart farming for better yields.
                </p>
                <button>Get Start Today</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
