import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { experiences } from "../data/experiences";
import styles from "./ExperienceDetail.module.css";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const experience = experiences.find((exp) => exp.slug === slug);

  // Store the index instead of the image URL to allow navigation
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Keyboard navigation (optional but great for UX)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") showNext(e);
      if (e.key === "ArrowLeft") showPrev(e);
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  if (!experience) {
    return <div className={styles.notFound}>Experience not found.</div>;
  }

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation(); // Prevent click from closing the lightbox
    setSelectedIndex((prev) => (prev === 0 ? experience.images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation(); // Prevent click from closing the lightbox
    setSelectedIndex((prev) => (prev === experience.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/")} className={styles.backButton}>
        ← Back
      </button>
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

      {experience.skills && experience.skills.length > 0 && (
        <div className={styles.skillsContainer}>
          {experience.skills.map((skill, index) => (
            <span key={index} className={styles.skillChip}>
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className={styles.section}>
        <h3>Description</h3>
        <div 
          className={styles.richTextDescription}
          dangerouslySetInnerHTML={{ __html: experience.detailedDescription }} 
        />
      </div>

      {experience.images && experience.images.length > 0 && (
        <div className={styles.section}>
          <h3>Pictures</h3>
          <div className={styles.galleryGrid}>
            {experience.images.map((img, i) => (
              <div key={i} className={styles.imageBox}>
                <img
                  src={img}
                  alt={`${experience.title} memory ${i + 1}`}
                  className={styles.galleryImage}
                  onClick={() => openLightbox(i)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox / Popup with Navigation */}
      {selectedIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>&times;</button>
          
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={showPrev}>
            &#10094;
          </button>
          
          <img 
            src={experience.images[selectedIndex]} 
            alt="Expanded view" 
            className={styles.lightboxImage} 
            onClick={(e) => e.stopPropagation()} 
          />
          
          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={showNext}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}