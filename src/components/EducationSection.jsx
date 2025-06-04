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
        {educationData.map((item, index) => (
          <div key={index} className={styles.branch}>
            <div className={styles.branchLine}></div>
            <div className={styles.card}>
              <div className={styles.school}>{item.school}</div>
              <div className={styles.level}>{item.level}</div>
              <div className={styles.date}>{item.duration}</div>
            </div>
          </div>
        ))}
        <div className={styles.mainLine}></div>
      </div>
    </section>
  );
}
