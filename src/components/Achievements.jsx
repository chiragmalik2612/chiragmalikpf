import React from 'react';
import styles from './Achievements.module.css';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: "JEE Mains Qualified",
      icon: FaTrophy,
      description: "JEE Mains Qualified (2022 and 2023)",
      color: "#a855f7", // purple
      bgColor: "#f3e8ff" // light purple background
    },
    {
      title: "JEE Advanced Qualified",
      icon: FaMedal,
      description: "JEE Advanced Qualified (2023)",
      color: "#d97706", // brown
      bgColor: "#fef3c7" // light brown background
    },
    {
      title: "PRMO Qualified",
      icon: FaAward,
      description: "2-times PRMO (Pre-Regional Mathematics Olympiad) Qualified (2017 and 2019)",
      color: "#14b8a6", // teal
      bgColor: "#ccfbf1" // light teal background
    }
  ];

  return (
    <section className={styles.achievementsSection} id="achievements">
      <h2 className={styles.heading}>Achievements</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineContainer}>
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className={styles.timelineItem}>
                <div 
                  className={styles.card} 
                  style={{ 
                    backgroundColor: achievement.bgColor
                  }}
                >
                  <div 
                    className={styles.iconCircle} 
                    style={{ backgroundColor: achievement.color }}
                  >
                    <IconComponent className={styles.icon} />
                  </div>
                  <h3 
                    className={styles.title} 
                    style={{ color: achievement.color }}
                  >
                    {achievement.title}
                  </h3>
                  <p className={styles.description}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
