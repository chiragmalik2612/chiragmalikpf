import React from "react";
import styles from "./HeroSection.module.css";
import pfp from "../assets/pfp.jpg";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={pfp} alt="Chirag Malik" className={styles.avatar} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          Hi, I'm <span className={styles.nameHighlight}>Chirag Malik</span>
        </h1>

        {/* NEW: High-impact scannable title */}
        <h2 className={styles.subHeading}>
          Full-Stack Developer & Biomedical Engineer
        </h2>

        {/* REFRAMED: Clearer, stronger narrative */}
        <p className={styles.tagline}>
          I build full-stack web applications, explore hands-on biomedical
          research, and mentor students in physics. Currently in my fourth year
          of an integrated dual degree at IIT (BHU)
        </p>

        <div className={styles.buttonGroup}>
          <a
            href="https://drive.google.com/file/d/1JGOhIphGOWqqOcVd8lVFgEV-b2jrakCZ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.buttonBase} ${styles.primaryBtn}`}
          >
            View Resume
          </a>

          <button
            className={`${styles.buttonBase} ${styles.outlineBtn}`}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
