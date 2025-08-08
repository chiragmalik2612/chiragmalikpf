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
         I'm a full-stack web developer at IIT (BHU), Varanasi, with a passion for creating performant, user-friendly web applications. I am proficient in the MERN stack, which I apply to practical problem-solving and creating clean designs.
         My journey has led me to a range of experiences, from mentoring students at Physics Wallah to conducting a research internship at IIT Delhi. These roles have given me a unique perspective on collaboration, mentorship, and applying technical skills to different domains. My adaptability and eagerness to learn new things are my key strengths.
         I am constantly upskilling and exploring new technologies, always with an eye toward building meaningful solutions. I am actively looking for an SDE role where I can contribute to a dynamic team, tackle challenging problems, and continue to grow as a developer.</p>
        {/* Action Buttons */}
        <div className={styles.buttonGroup}>
          <a
            href="https://drive.google.com/file/d/1hC188BIdgznAflba1NIuaGeSx5QosOWi/view?usp=drive_link"
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
