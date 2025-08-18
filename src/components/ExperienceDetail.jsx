import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { experiences } from "../data/experiences";
import styles from "./ExperienceDetail.module.css";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const experience = experiences.find((exp) => exp.slug === slug);

  const [selectedImage, setSelectedImage] = useState(null);

  if (!experience) {
    return <div className={styles.notFound}>Experience not found.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{experience.title}</h1>
      <h2 className={styles.org}>
        <a
          href={experience.orgLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.orgLink}
        >
          {experience.org}
        </a>
      </h2>
      <p className={styles.date}>{experience.date}</p>

      <div className={styles.section}>
        <h3>Description</h3>
        <p className={styles.description}>
          {experience.detailedDescription.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      {experience.images && experience.images.length > 0 && (
        <div className={styles.section}>
          <h3>Memories & Pictures</h3>
          <div className={styles.galleryGrid}>
            {experience.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${experience.title} memory ${i + 1}`}
                className={styles.galleryImage}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Lightbox / Popup */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Expanded view" className={styles.lightboxImage} />
        </div>
      )}
    </div>
  );
}
