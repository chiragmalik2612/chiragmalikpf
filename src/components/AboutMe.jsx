import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.section} id="about">
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.content}>
        <p className={styles.text}>
          I am a Full-Stack Web Developer and student at IIT (BHU), Varanasi,
          passionate about leveraging technology to build efficient and
          impactful digital solutions. My diverse experience across mentorship
          and SME roles at Physics Wallah, a research internship at IIT Delhi,
          and hands-on web development has shaped me into an adaptable
          problem-solver who thrives in multidisciplinary environments. With a
          deep interest in both technology and edtech, I enjoy creating products
          that enhance learning and user experience. I'm a quick learner, always
          exploring new tools and frameworks, and eager to contribute my
          technical expertise, creativity, and collaborative mindset to a
          dynamic team in a software development or edtech-focused role.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

