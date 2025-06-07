import React from "react";
import styles from "./ProjectsSection.module.css";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

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
