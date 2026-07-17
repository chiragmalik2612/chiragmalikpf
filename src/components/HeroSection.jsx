import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import profilePic from "../assets/profile.jpg";
import pfp from "../assets/pfp.jpg";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={pfp} alt="Chirag Malik" className={styles.avatar} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          Hello, I am <span className={styles.nameHighlight}>Chirag</span>!
        </h1>
        <p className={styles.tagline}>
          Full-Stack Web Developer focused on building clear and intuitive digital experiences.
          <br />
          Also a Physics Mentor who enjoys contributing to meaningful learning outcomes.
        </p>
        <div className={styles.buttonGroup}>
          <a
            href="https://drive.google.com/file/d/1JGOhIphGOWqqOcVd8lVFgEV-b2jrakCZ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.buttonBase} ${styles.primaryBtn}`}
          >
            Resume
          </a>

          <button
            className={`${styles.buttonBase} ${styles.outlineBtn}`}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
