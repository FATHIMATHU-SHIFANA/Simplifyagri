import React from "react";
import styles from "./careers.module.css";
import img1 from "../../assets/career_img1.png";
import img2 from "../../assets/career_img2.png";
import img3 from "../../assets/career_img3.png";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoBulbOutline } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import CallToAction from "../CallToAction/CallToAction";
import bannerImage from '../../assets/banner_careers.png'

const imagePaths = [{ image: img1 }, { image: img2 }, { image: img3 }];

const Careers = () => (
  <div>
    {/* Hero Section */}
 <div
  className={`${styles.heroSection} carousel slide`}
  id="careersCarousel"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    {imagePaths.map((img, index) => (
      <div
        key={index}
        className={`carousel-item ${index === 0 ? "active" : ""} ${
          styles.carouselItem
        }`}
      >
        <img
          src={img.image}
          className="d-block w-100"
          alt={`Slide ${index + 1}`}
        />
        <div className={styles.carouselCaption}>
          <div className={styles.leftSection}>
            <h2>Join our team</h2>
          </div>
          <div className={styles.rightSection}>
            <p>
              If you're passionate about making a difference in agriculture,
              join us in shaping the future of farming with smart solutions.
            </p>
            <button>Submit your CV</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    {/* Our Core Values Section */}
    <section className={styles.coreValues}>
      <h2>Our core values</h2>
      <p>
        At Simplifyagri, we're more than just a company; we're a community of
        passionate individuals committed to transforming agriculture. We offer a
        dynamic workplace where your ideas are valued, your contributions
        matter, and your career can flourish.
      </p>

      <div className={styles.valuesGrid}>
        <div className={styles.valueCard}>
          <RiGraduationCapLine className={styles.icon} />
          <h4>Continuous learning</h4>
          <p>
            We empower your growth with holistic training and relentless
            innovation, ensuring you stay at the forefront of agricultural
            technology.
          </p>
        </div>
        <div className={styles.valueCard}>
          <FaPeopleGroup className={styles.icon} />
          <h4>Team Synergy</h4>
          <p>
            Join a dynamic and passionate team that truly values open
            communication, respect, and teamwork—this shared success leads to
            faster innovation.
          </p>
        </div>
        <div className={styles.valueCard}>
          <IoBulbOutline className={styles.icon} />
          <h4>Innovative Projects</h4>
          <p>
            Engage in cutting-edge projects that challenge the status quo,
            foster creative thinking, and drive meaningful innovation in the
            agriculture industry.
          </p>
        </div>
      </div>
    </section>

    {/* Future Opportunities Form */}
    <section className={styles.futureForm}>
      <h2>Future opportunities</h2>
      <p>
        If you're passionate about agriculture and technology but don’t see a
        current opening that fits your skills, we’d still love to hear from you.
        Please fill out the form below, and we’ll keep your information on file
        for future opportunities.
      </p>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your E-mail Id"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Your phone number"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            placeholder="LinkedIn Link"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="github">Github Link</label>
          <input
            type="text"
            id="github"
            name="github"
            placeholder="Github Link"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="resume">Upload CV</label>
          <label htmlFor="upload">
            <span>Choose File</span>
            <FiUpload />
          </label>
          <input
            type="file"
            id="upload"
            name="resume"
          />
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>

     {/* CTA */}
      <CallToAction
        bgImage={bannerImage}
        heading={
          <span>
            Ready to grow your <br />
            career with us
          </span>
        }
      />
  </div>
);

export default Careers;
