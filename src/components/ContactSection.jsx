import React from "react";
import styles from "./ContactSection.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => (
  <section className={styles.section} id="contact">
    <h2 className={styles.heading}>
      I'm always excited to connect, collaborate, or contribute to meaningful
      projects. Whether it's about technology, education, or an opportunity to
      grow together, feel free to reach out. Let's build something impactful!
    </h2>
    <div className={styles.list}>
      <div className={styles.item}>
        <MdEmail className={styles.icon} />
        <a href="mailto:chiragmalik2612@email.com" className={styles.link}>
          Gmail
        </a>
      </div>
      <div className={styles.item}>
        <FaLinkedin className={styles.icon} />
        <a
          href="https://www.linkedin.com/in/chirag-malik-63ba44282/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          linkedin
        </a>
      </div>
      <div className={styles.item}>
        <FaGithub className={styles.icon} />
        <a
          href="https://github.com/chiragmalik2612"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Github
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
