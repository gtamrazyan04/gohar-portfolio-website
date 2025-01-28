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
/* General section styling */
.skills-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f3f4f6, #e3e4e9);
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  font-family: "Poppins", sans-serif;
}

/* Skills container styling */
.skills-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skills-category {
  margin: 0 auto;
}

.category-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #555;
}

/* Skills grid layout */
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

/* Individual skill items */
.skill-item {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, #ffffff, #eaeaea);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.skill-item:hover {
  transform: scale(1.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.skill-icon,
.skill-flag {
  width: 60%;
  height: 60%;
  border-radius: 50%;
  object-fit: contain;
}

/* Tooltip styling */
.tooltip {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  padding: 0.5rem 1rem;
  background: #000;
  color: #fff;
  border-radius: 5px;
  font-size: 0.8rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.skill-item:hover .tooltip {
  opacity: 1;
}
