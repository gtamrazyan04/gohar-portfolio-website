import React from "react";
import ProjectBox from "./ProjectBox";
import "./ProjectGrid.css";

const projectGroups = [
  {
    title: "Websites Built in WIX",
    projects: [
      {
        title: "Intro to Programming Website",
        description:
          "Created my own website for my students when working as a teaching assistant.",
        mediaType: "image",
        mediaSrc: [
          "/assets/project2/screenshot1.png",
          "/assets/project2/screenshot2.png",
          "/assets/project2/screenshot3.png",
        ],
        link: "https://eprog23.wixstudio.com/hs23",
      },
      {
        title: "voCHabular Web-App",
        description:
          "Language learning platform built voluntarily for voCHabular in WIX Studio.",
        mediaType: "image",
        mediaSrc: [
          "/assets/project5/screenshot1.png",
          "/assets/project5/screenshot2.png",
          "/assets/project5/screenshot3.png",
        ],
        link: "https://www.vochabular-webapp.ch",
      },
    ],
  },
  {
    title: "React and React Native Projects",
    projects: [
      {
        title: "React Native Task Management App",
        description:
          "(HCI project) Task management app with multiple versions, built based on needfinding, ideation etc.",
        mediaType: "video",
        mediaSrc: "/assets/project3/video.mp4",
        link: "https://github.com/gtamrazyan04/hci-react-native-task-app",
      },
      {
        title: "Conflict Events Map Website",
        description:
          "Built with React and Express.js using ACLED data as a group project.",
        mediaType: "image",
        mediaSrc: ["/assets/project4/teaser.png"],
        link: "https://fp-p25.fwe24.ivia.ch",
      },
    ],
  },
  {
    title: "Video Editing",
    projects: [
      {
        title: "Matura Thesis Video",
        description:
          "Recorded and edited my own thesis video about Armenia as a Business Location.",
        mediaType: "video",
        mediaSrc: "/assets/project1/video.mov",
        link: "https://www.youtube.com/watch?v=o2Brsn_TJzQ&feature=youtu.be",
      },
    ],
    others: [
      {
        title: "Soccer Analytics",
        description:
          "Analyzed soccer match data and created insightful visuals.",
      },
      {
        title: "IML & Compiler Design",
        description:
          "Coding projects completed throughout the semester as part of coursework.",
      },
    ],
  },
];
const ProjectGrid = () => {
  return (
    <section id="projects" className="projects__container">
      <h2 className="project__title">Projects</h2>
      <div className="project-grid-container">
        {projectGroups.map((group, index) => (
          <section key={index} className="project-group">
            <h2 className="group-title">{group.title}</h2>
            <div className="project-column">
              {group.projects.map((project, idx) => (
                <ProjectBox key={idx} project={project} />
              ))}
              {group.others && (
                <ul className="other-projects-list">
                  <h2 className="group-title">Other projects</h2>
                  {group.others.map((project, idx) => (
                    <li key={idx} className="other-project-item">
                      <strong>{project.title}:</strong> {project.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
