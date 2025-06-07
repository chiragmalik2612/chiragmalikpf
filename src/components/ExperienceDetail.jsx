import React from "react";
import { useParams } from "react-router-dom";
import { experiences } from "../data/experiences";
import styles from "./ExperienceDetail.module.css";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
    return <div className={styles.notFound}>Experience not found.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{experience.title}</h1>
      <h2 className={styles.org}>{experience.org}</h2>
      <p className={styles.date}>{experience.date}</p>
      <p className={styles.type}>{experience.type}</p>

      <div className={styles.section}>
        <h3>Description</h3>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}
