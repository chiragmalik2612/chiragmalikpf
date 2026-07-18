import React from "react";
import styles from "./ContactSection.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => (
  <section className={styles.section} id="contact">
    <h2 className={styles.title}>Let's Connect</h2>
    
    {/* REFRAMED TEXT: More confident, specific, and professional */}
    <p className={styles.description}>
      I am always open to discussing new opportunities, collaborating on scalable 
      full-stack platforms, or geeking out over physics and biomedical research. 
      My inbox is always open , let's build something impactful.
    </p>
    
    <div className={styles.list}>
      <a 
        href="mailto:chiragmalik2612@email.com" 
        className={styles.item}
      >
        <div className={styles.iconWrapper}>
          <MdEmail className={styles.icon} />
        </div>
        <span className={styles.label}>Email</span>
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