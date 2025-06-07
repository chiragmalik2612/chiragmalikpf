import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Project not found</h2>
        <Link to="/">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>

      <div className={styles.links}>
        <a href={project.liveLink} target="_blank" rel="noreferrer">
          🔗 Live Demo
        </a>
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          💻 GitHub
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
        <p>{project.description}</p>
      </div>

      <div className={styles.section}>
        <h3>Challenges & Learnings</h3>
        <p>{project.challenges}</p>
      </div>

      <Link className={styles.backLink} to="/">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetail;
