import React, { useEffect, useRef } from "react";
import "./Skills.css";
import { FaCode, FaLanguage, FaBook, FaChessKnight } from "react-icons/fa";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FaCode />,
    items: [
      "Java",
      "Python",
      "C",
      "HTML, CSS, React",
      "React Native",
      "C++",
      "PostgreSQL",
      "Haskell",
      "OCaml ( > Compiler Design)",
    ],
  },
  {
    category: "Foreign Languages",
    icon: <FaLanguage />,
    items: [
      "Armenian (Mother Tongue)",
      "German (Mother Tongue)",
      "French (C1)",
      "English (C1)",
      "Spanish (B2)",
      "Italian (B1)",
      "Russian (A1)",
    ],
  },
  {
    category: "Important Coursework",
    icon: <FaBook />,
    items: [
      "Foundations: Algorithms & Data Structures, Probabilities & Statistics, Theoretical CS, Formal Methods",
      "Introduction to Machine Learning (IML), AI in Education, Information Retrieval, LLMs",
      "Human Computer Interaction, Web Engineering",
      "Autonomous Mobile Robots, Soccer Analytics, Game Theory, Microeconomics",
    ],
  },
  {
    category: "Interests",
    icon: <FaChessKnight />,
    items: [
      "Programming",
      "Website building",
      "Teaching & tutoring",
      "Chess",
      "Design",
      "Video editing",
      "Photography",
      "Developing solutions",
      "Teamwork",
    ],
  },
];

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate"); // Reset animation when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-interests-container" ref={skillsRef}>
      <h2 className="section-title">Skills & Interests</h2>
      <div className="cards-grid">
        {skillsData.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            style={{ "--card-delay": `${index * 0.2}s` }}
          >
            <div className="card-header">
              {skill.icon}
              <h3>{skill.category}</h3>
            </div>
            <ul className="card-content">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
