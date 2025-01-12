import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: "/assets/skills/java.svg" },
      { name: "Python", icon: "/assets/skills/python.svg" },
      { name: "C", icon: "/assets/skills/c.svg" },
      { name: "C++", icon: "/assets/skills/c++.svg" },
      { name: "HTML", icon: "/assets/skills/html.svg" },
      { name: "CSS", icon: "/assets/skills/css.svg" },
      { name: "React", icon: "/assets/skills/react.svg" },
      { name: "PostgreSQL", icon: "/assets/skills/postgresql.svg" },
      { name: "Haskell", icon: "/assets/skills/haskell.svg" },
    ],
  },
  {
    category: "Foreign Languages",
    items: [
      { name: "Armenian (Mother Tongue)", flag: "/assets/skills/am.png" },
      { name: "German (Mother Tongue)", flag: "/assets/skills/de.png" },
      { name: "French (C1)", flag: "/assets/skills/fr.png" },
      { name: "English (C1)", flag: "/assets/skills/us.png" },
      { name: "Spanish (B2)", flag: "/assets/skills/es.png" },
      { name: "Italian (B1)", flag: "/assets/skills/it.png" },
      { name: "Swiss German", flag: "/assets/skills/ch.png" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills & Interests</h2>
      <div className="skills-container">
        {skillsData.map((skillCategory, index) => (
          <div className="skills-category" key={index}>
            <h3 className="category-title">{skillCategory.category}</h3>
            <div className="skills-grid">
              {skillCategory.items.map((item, idx) => (
                <div className="skill-item" key={idx}>
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="skill-icon"
                    />
                  )}
                  {item.flag && (
                    <img
                      src={item.flag}
                      alt={item.name}
                      className="skill-flag"
                    />
                  )}
                  <div className="tooltip">
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
