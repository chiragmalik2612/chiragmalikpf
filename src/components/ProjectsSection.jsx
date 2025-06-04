import React from "react";
import styles from "./ProjectsSection.module.css";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "PhyJEEcs",
    description:
      "PhyJEEcs is a web application designed to assist JEE aspirants in practicing Physics questions chapter-wise. It enables students to track their progress, improve problem-solving skills, and monitor performance through a structured and user-friendly interface. Users can attempt questions of varying difficulty, view their attempt history, and gain insights into their chapter-wise performance.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RestAPI",
      "Cloudinary",
    ],
    slug: "phyjeecs",
  },
  {
    title: "EmOOd",
    description:
      "This web application allows you to regularly record your moods and emotions, maintaining a comprehensive history to help you better understand and analyze your feelings over time. It also provides support for those who struggle with identifying and expressing emotions—a condition known as Alexithymia—by offering relatable options to help articulate what you’re experiencing.",
    techStack: ["React.js", "Firebase", "Bootstrap", "Chart.js"],
    slug: "emood",
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((proj, i) => (
          <div className={styles.card} key={i}>
            <h3 className={styles.title}>{proj.title}</h3>
            <div className={styles.chipContainer}>
              {proj.techStack.map((tech, idx) => (
                <span key={idx} className={styles.chip}>
                  {tech}
                </span>
              ))}
            </div>
            <p className={styles.description}>{proj.description}</p>
            <button
              className={styles.button}
              onClick={() => navigate(`/projects/${proj.slug}`)}
            >
              View →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
