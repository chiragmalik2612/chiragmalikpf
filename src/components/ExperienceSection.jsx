import React from "react";
import styles from "./ExperienceSection.module.css";
import { experiences } from "../data/experiences";
import { Link } from "react-router-dom";

export default function ExperienceSection() {
  return (
    <section className={styles.timelineWrapper} id="experience">
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>
        <div className={styles.mainLine}></div>
        {experiences.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.node}></div>
            <div className={styles.content}>
              <div className={styles.dateLabel}>{item.date}</div>
              <div className={styles.card}>
                <div className={styles.titleRow}>
                  <span className={styles.title}>{item.title}</span>
                </div>
                
                {item.orgLink ? (
                  <a
                    href={item.orgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.orgLink}
                  >
                    {item.org}
                  </a>
                ) : (
                  <div className={styles.org}>{item.org}</div>
                )}

                {/* --- NEW: Skill Chips Added to Timeline Cards --- */}
                {item.skills && item.skills.length > 0 && (
                  <div className={styles.skillsContainer}>
                    {item.skills.map((skill, i) => (
                      <span key={i} className={styles.skillChip}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {/* ------------------------------------------------ */}

                <p className={styles.desc}>{item.description}</p>
                <Link to={`/experience/${item.slug}`} className={styles.viewLink}>
                  Read About My Experience →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}