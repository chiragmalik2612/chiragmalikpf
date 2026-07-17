import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Project not found</h2>
        <button onClick={() => navigate("/")} className={styles.backButton}>
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/")} className={styles.backButton}>
        ← Back
      </button>
      <h1 className={styles.title}>{project.title}</h1>

      <div className={styles.links}>
        <a href={project.liveLink} target="_blank" rel="noreferrer" className={styles.primaryLink}>
          Live Demo
        </a>
        <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.outlineLink}>
          GitHub
        </a>
      </div>

      <div className={styles.section}>
        <h3>Tech Stack</h3>
        <div className={styles.techList}>
          {project.techStack.map((tech, idx) => (
            <span key={idx} className={styles.techItem}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>About</h3>
        <p className={styles.para}>{project.description}</p>
      </div>

      <div className={styles.section}>
        <h3>Challenges & Learnings</h3>
        <p className={styles.para}>{project.challenges}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;