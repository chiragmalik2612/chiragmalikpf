import React from "react";
import styles from "./EducationSection.module.css";

const educationData = [
  {
    school: "Indian Institute of Technology (BHU), Varanasi",
    level: "B.Tech + M.Tech (IDD) in Biomedical Engineering",
    duration: "2023 – 2028",
  },
  {
    school: "Yoginath Vidyapeeth Sarurpur Kalan, Baghpat (UP)",
    level: "Class XII – CBSE (Science Stream)",
    duration: "2022",
  },
  {
    school: "Jawahar Navodaya Vidyalaya, Baghpat (UP)",
    level: "Class X – CBSE",
    duration: "2020",
  },
];

export default function EducationSection() {
  return (
    <section className={styles.timelineWrapper} id="education">
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.timeline}>
        <div className={styles.mainLine}></div>
        {educationData.map((item, index) => {
          return (
            <div 
              key={index} 
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.node}></div>
              <div className={styles.content}>
                <div className={styles.dateLabel}>{item.duration}</div>
                <div className={styles.school}>{item.school}</div>
                <div className={styles.level}>{item.level}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
