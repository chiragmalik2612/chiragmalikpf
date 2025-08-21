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
        <h1 className={styles.heading}>Hi, I'm Chirag Malik</h1>
        <p className={styles.subheading} style={{ fontStyle: "italic" }}>
          IIT BHU | Web Developer | SME @PW | Research Intern'25 @IITDelhi  | ex-JEE
          Mentor @PW
        </p>
        <p className={styles.description}>
         I am a full-stack web developer and student at IIT (BHU), Varanasi. I focus on building performant and user-friendly web applications. My diverse experience, including mentor and SME roles at Physics Wallah and a research internship at IIT Delhi, has provided me with a unique perspective on collaboration and problem-solving across different domains. I am a quick learner, constantly upskilling, and eager to contribute my technical skills and adaptability to a dynamic team in an SDE role.
          </p>
          <div className={styles.buttonGroup}>
          <a
            href="https://drive.google.com/file/d/1MwkBolcZ3qpOu4DAgCoiSrUglkRvMW_T/view?usp=drive_link"
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
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
