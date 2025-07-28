import React from 'react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const achievements = [
    "JEE Mains Qualified (2022 and 2023)",
    "JEE Advanced Qualified (2023)",
    "2-times PRMO (Pre-Regional Mathematics Olympiad) Qualified (2017 and 2019)"
  ];

  return (
    <section className={styles.achievementsSection}>
      <h2 className={styles.heading}>Achievements</h2>
      <ul className={styles.list}>
        {achievements.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
