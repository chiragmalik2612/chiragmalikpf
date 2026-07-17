import React from 'react';
import styles from './Achievements.module.css';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: "JEE Mains Qualified",
      icon: FaTrophy,
      description: "Successfully cleared in both 2022 and 2023.",
      color: "#8b5cf6", // Purple accent
    },
    {
      title: "JEE Advanced Qualified",
      icon: FaMedal,
      description: "Successfully cleared in 2023, securing admission to IIT (BHU).",
      color: "#d97706", // Amber/Gold accent
    },
    {
      title: "PRMO Qualified",
      icon: FaAward,
      description: "Two-time Pre-Regional Mathematics Olympiad Qualifier (2017 and 2019).",
      color: "#0d9488", // Teal accent
    }
  ];

  return (
    <section className={styles.section} id="achievements">
      <h2 className={styles.heading}>Achievements</h2>
      <div className={styles.grid}>
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <div key={index} className={styles.card}>
              <div 
                className={styles.iconCircle} 
                style={{ backgroundColor: achievement.color }}
              >
                <IconComponent className={styles.icon} />
              </div>
              <h3 className={styles.title}>
                {achievement.title}
              </h3>
              <p className={styles.description}>
                {achievement.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;