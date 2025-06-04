import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navItems = ['Contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 150; // adjust based on navbar height

      let current = "home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop - offset;
          if (scrollY >= sectionTop) {
            current = item.toLowerCase();
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.toolbar}>
        <div className={styles.brand}>Chirag Malik</div>
        <nav className={styles.navItems}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${styles.navButton} ${
                activeSection === item.toLowerCase() ? styles.active : ""
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
