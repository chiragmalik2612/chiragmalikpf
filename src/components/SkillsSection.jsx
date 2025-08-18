import React from "react";
import styles from "./SkillsSection.module.css";

const skillData = [
  {
    category: "Tech Stack",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Docker",
      "Firebase",
      "Chart.js",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Cloudinary",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Figma",
      "Canva",
      "Git",
      "MS Word",
      "MS Excel",
      "PowerPoint",
      "Google Docs",
      "Google Sheets",
    ],
  },
  {
    category: "Academic & Mentorship",
    skills: [
      "Teaching",
      "Doubt Solving",
      "Mentoring",
      "Content Creation",
    ],
  },
  {
    category: "Research & Lab",
    skills: [
      "Lab-on-Chip",
      "Microscopy",
      "Lab Tools",
      "NCBI Tools",
    ],
  },
];

const SkillsSection = () => (
  <section className={styles.section} id="skills">
    <h2 className={styles.heading}>Skills & Proficiencies</h2>
    <div className={styles.tableWrapper}>
      <table className={styles.skillsTable}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {skillData.map((item, index) => (
            <tr key={index}>
              <td className={styles.categoryCell}>{item.category}</td>
              <td className={styles.skillsCell}>
                <div className={styles.chipContainer}>
                  {item.skills.map((skill, i) => (
                    <span key={i} className={styles.chip}>
                      {skill}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default SkillsSection;
