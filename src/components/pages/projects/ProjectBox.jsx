import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ProjectBox.css";

const ProjectBox = ({ project }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Automatically change media every 2 seconds
  useEffect(() => {
    if (project.mediaType === "image") {
      const interval = setInterval(() => {
        setCurrentMediaIndex(
          (prevIndex) => (prevIndex + 1) % project.mediaSrc.length
        );
      }, 2000); // Change every 2 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [project.mediaType, project.mediaSrc.length]);

  return (
    <motion.div
      className="project-box"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => window.open(project.link, "_blank")}
    >
      <div className="project-media">
        {project.mediaType === "video" && (
          <video autoPlay loop muted>
            <source src={project.mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {project.mediaType === "image" && (
          <img
            src={project.mediaSrc[currentMediaIndex]}
            alt={`${project.title} screenshot`}
          />
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
