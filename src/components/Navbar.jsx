import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "About Me", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Achievements", id: "achievements" },
  { label: "Connect", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 150; 

      let current = "about";
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop - offset;
          if (scrollY >= sectionTop) {
            current = item.id;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false); // Closes the mobile menu when a link is clicked
    
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; 
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.toolbar}>
        
        {/* Hamburger Icon (Only visible on mobile) */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Navigation Items */}
        <nav className={`${styles.navItems} ${isMenuOpen ? styles.showMenu : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`${styles.navButton} ${
                activeSection === item.id ? styles.active : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;