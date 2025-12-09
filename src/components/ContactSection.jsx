import React from "react";
import styles from "./ContactSection.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => (
  <section className={styles.section} id="contact">
    <h2 className={styles.title}>Let's Connect</h2>
    <p className={styles.description}>
      I'm always excited to connect, collaborate, or contribute to meaningful
      projects. Whether it's about technology, education, or an opportunity to
      grow together, feel free to reach out. Let's build something impactful!
    </p>
    <div className={styles.list}>
      <a 
        href="mailto:chiragmalik2612@email.com" 
        className={styles.item}
      >
        <div className={styles.iconWrapper}>
          <MdEmail className={styles.icon} />
        </div>
        <span className={styles.label}>Gmail</span>
      </a>
      <a
        href="https://www.linkedin.com/in/chirag-malik-63ba44282/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.item}
      >
        <div className={styles.iconWrapper}>
          <FaLinkedin className={styles.icon} />
        </div>
        <span className={styles.label}>LinkedIn</span>
      </a>
      <a
        href="https://github.com/chiragmalik2612"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.item}
      >
        <div className={styles.iconWrapper}>
          <FaGithub className={styles.icon} />
        </div>
        <span className={styles.label}>GitHub</span>
      </a>
    </div>
  </section>
);

export default ContactSection;
