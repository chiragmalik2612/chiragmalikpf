import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.section} id="about">
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.content}>
        <p className={styles.text}>
          I am a Full-Stack Web Developer and IDD student at IIT (BHU), Varanasi, with a strong focus on building scalable, production-ready web applications. I have hands-on industry experience developing real-world systems using React, Node.js, Express, MongoDB, and modern tools. Alongside software development, I have worked extensively in the edtech industry as a Physics Mentor and SME, gaining insight into large-scale learning platforms and user-centric product design. My research internship at IIT Delhi exposed me to experimental workflows and interdisciplinary problem-solving, strengthening my analytical approach. I am highly adaptable and quick to learn, comfortable working across domains such as web development, edtech, research, and mentorship. Driven by curiosity and impact, I enjoy collaborating in dynamic environments and continuously exploring new technologies to build meaningful digital solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;





