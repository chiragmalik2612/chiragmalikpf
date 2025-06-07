import React from "react";
import styles from "./ExperienceSection.module.css";
import { experiences } from "../data/experiences";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ExperienceSection() {
  // const navigate = useNavigate();

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
              </div>
              <div className={styles.org}>{item.org}</div>
              <div className={styles.date}>{item.date}</div>
              <p className={styles.desc}>{item.description}</p>
              <Link to={`/experience/${item.slug}`} className={styles.viewLink}>
                Read About My Experience →
              </Link>
            </div>
          </div>
        ))}
        <div className={styles.mainLine}></div>
      </div>
    </section>
  );
}
