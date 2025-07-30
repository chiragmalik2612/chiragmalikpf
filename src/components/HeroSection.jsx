import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import profilePic from "../assets/profile.jpg";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={profilePic} alt="Chirag Malik" className={styles.avatar} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Hi, I'm Chirag Malik</h1>
        <p className={styles.subheading} style={{ fontStyle: "italic" }}>
          IIT BHU | Web Developer | SME @PW | Research Intern'25 @IITDelhi  | ex-JEE
          Mentor @PW
        </p>
        <p className={styles.description}>
          I’m a full-stack web developer and undergraduate student at IIT (BHU), Varanasi. I build web applications with a focus on clean UI, performance, and usability. I’ve worked for nearly a year as a JEE Mentor at Physics Wallah and currently contribute as a Subject Matter Expert in Physics. I previously worked as a Research Intern at IIT Delhi, where I applied my skills in a research-driven environment and gained valuable hands-on experience. I’m constantly building new projects, sharpening my technical abilities, and applying them across both education and technology. I'm always excited to collaborate, create meaningful solutions, and connect with like-minded individuals.
        </p>
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
