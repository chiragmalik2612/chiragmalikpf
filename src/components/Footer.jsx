import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    © {new Date().getFullYear()} Your Name. All rights reserved.
  </footer>
);

export default Footer;
