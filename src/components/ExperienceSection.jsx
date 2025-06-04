import React from "react";
import styles from "./ExperienceSection.module.css";

const experiences = [
  {
    title: "Research Intern",
    org: "IIT Delhi",
    date: "May 2025 – Present",
    type: "Intern",
    description:
      "Working on microfluidics and Lab-on-a-Chip systems in a biochemical research lab, focusing on fluid behavior at micro-scale and device development.",
  },
  {
    title: "SME - Physics",
    org: "Physics Wallah",
    date: "May 2025 – Present",
    type: "Content",
    description:
      "Working on JEE Physics doubt resolution and preparing accurate, high-quality solutions for student queries.",
  },
  {
    title: "JEE Mentor",
    org: "Physics Wallah",
    date: "Jun 2024 – May 2025",
    type: "Mentor",
    description:
      "Mentored JEE 2024–25 aspirants through live doubt-solving sessions, shared question sets, and provided continuous academic guidance and support.",
  },
];

export default function ExperienceSection() {
  return (
    <section className={styles.timelineWrapper}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((item, index) => (
          <div key={index} className={styles.branch}>
            <div className={styles.branchLine}></div>
            <div className={styles.card}>
              <div className={styles.titleRow}>
                <span className={styles.title}>{item.title}</span>
                {/* <span
                  className={`${styles.badge} ${
                    styles[item.type.toLowerCase()]
                  }`}
                >
                  {item.type}
                </span> */}
              </div>
              <div className={styles.org}>{item.org}</div>
              <div className={styles.date}>{item.date}</div>
              <p className={styles.desc}>{item.description}</p>
            </div>
          </div>
        ))}
        <div className={styles.mainLine}></div>
      </div>
    </section>
  );
}
