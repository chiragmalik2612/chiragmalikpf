import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.section} id="about">
  <h2 className={styles.heading}>About Me</h2>
  <div className={styles.content}>
    <p className={styles.text}>
      I am a <strong>4th-year Integrated Dual Degree (B.Tech + M.Tech) student in Biomedical Engineering at IIT (BHU), Varanasi</strong>. My professional journey is defined by a deep curiosity that bridges software engineering, scientific research, and educational technology.
    </p>

    <p className={styles.text}>
      As a <strong>Full-Stack Web Developer</strong>, I specialize in the MERN stack and Next.js, alongside modern infrastructure tools like Docker and AWS. I focus on building scalable, production-ready applications that solve real-world problems.
    </p>

    <p className={styles.text}>
      Alongside my development work, I have a strong foundation in <strong>interdisciplinary research</strong>. My internships at IIT Roorkee (working on a DRDO-sponsored medical-grade biomaterials project) and IIT Delhi (fabricating microfluidic Lab-on-a-Chip devices) have given me valuable hands-on experience in wet-lab environments, scientific protocols, and practical experimental workflows.
    </p>

    <p className={styles.text}>
      Parallel to my technical pursuits, I have spent significant time in the EdTech space as a <strong>Physics Mentor and Subject Matter Expert</strong>. Mentoring hundreds of competitive exam aspirants has not only honed my technical communication but also given me invaluable insights into user-centric product design and the architecture of large-scale learning platforms.
    </p>

    <p className={styles.text}>
      I thrive in dynamic environments where I can leverage this diverse background. Whether it is writing clean code, optimizing a laboratory protocol, or breaking down a complex physics concept, I am driven by the desire to build meaningful, high-impact solutions.
    </p>
  </div>
</section>
  );
};

export default AboutMe;