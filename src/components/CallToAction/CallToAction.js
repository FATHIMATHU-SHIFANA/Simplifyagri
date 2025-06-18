import React from 'react';
import styles from './calltoaction.module.css';

function CallToAction({ bgImage, heading }) {
  const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className={styles.ctaWrapper}>
      <div className={styles.ctaSection} style={sectionStyle}>
        <h2>{heading}</h2>
        <div className={styles.subscribe}>
          <input type="email" placeholder="Enter your Email" />
          <button>
            Send <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;