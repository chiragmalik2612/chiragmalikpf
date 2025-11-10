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
          IIT BHU | Web Developer | Physics Mentor @SciAstra | Research Intern
          (IIT Delhi '25) | ex-SME & JEE Mentor @Physics Wallah
        </p>
        <p className={styles.description}>
          I am a Full-Stack Web Developer and student at IIT (BHU), Varanasi,
          passionate about leveraging technology to build efficient and
          impactful digital solutions. My diverse experience across mentorship
          and SME roles at Physics Wallah, a research internship at IIT Delhi,
          and hands-on web development has shaped me into an adaptable
          problem-solver who thrives in multidisciplinary environments. With a
          deep interest in both technology and edtech, I enjoy creating products
          that enhance learning and user experience. I’m a quick learner, always
          exploring new tools and frameworks, and eager to contribute my
          technical expertise, creativity, and collaborative mindset to a
          dynamic team in a software development or edtech-focused role.
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
