import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "PROGRAMMING LANGUAGES",
    subcategories: [
      {
        name: "Web Development",
        items: [
          {
            name: "HTML",
            icon: "/assets/skills/programming/html.svg",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
          {
            name: "CSS",
            icon: "/assets/skills/programming/css.svg",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            name: "React",
            icon: "/assets/skills/programming/react.svg",
            link: "https://reactjs.org/",
          },
          {
            name: "React Native",
            icon: "/assets/skills/programming/react-native.svg",
            link: "https://reactnative.dev/",
          },
          {
            name: "JavaScript",
            icon: "/assets/skills/programming/javascript.svg",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
          {
            name: "TypeScript",
            icon: "/assets/skills/programming/typescript.svg",
            link: "https://www.typescriptlang.org/",
          },
        ],
      },
      {
        name: "Main Languages",
        items: [
          {
            name: "Java",
            icon: "/assets/skills/programming/java.svg",
            link: "https://www.oracle.com/java/",
          },
          {
            name: "Python",
            icon: "/assets/skills/programming/python.svg",
            link: "https://www.python.org/",
          },
          {
            name: "C",
            icon: "/assets/skills/programming/c.svg",
            link: "https://en.wikipedia.org/wiki/C_(programming_language)",
          },
          {
            name: "C++, only basic knowledge",
            icon: "/assets/skills/programming/c++.svg",
            link: "https://isocpp.org/",
          },
        ],
      },
      {
        name: "Databases & Functional",
        items: [
          {
            name: "PostgreSQL",
            icon: "/assets/skills/programming/postgresql.svg",
            link: "https://www.postgresql.org/",
          },
          {
            name: "Haskell",
            icon: "/assets/skills/programming/haskell.svg",
            link: "https://www.haskell.org/",
          },
          {
            name: "OCaml",
            icon: "/assets/skills/programming/ocaml.svg",
            link: "https://ocaml.org/",
          },
        ],
      },
    ],
  },
  {
    category: "IDEs",
    items: [
      {
        name: "Visual Studio Code",
        icon: "/assets/skills/programming/vscode.svg",
        link: "https://code.visualstudio.com/",
      },
      {
        name: "PyCharm",
        icon: "/assets/skills/programming/pycharm.svg",
        link: "https://www.jetbrains.com/pycharm/",
      },
      {
        name: "Eclipse",
        icon: "/assets/skills/programming/eclipse.png",
        link: "https://www.eclipse.org/",
      },
      {
        name: "Thonny, used for teaching",
        icon: "/assets/skills/programming/thonny.png",
        link: "https://thonny.org/",
      },
    ],
  },
  {
    category: "FOREIGN LANGUAGES",
    items: [
      {
        name: "Armenian (Mother Tongue)",
        flag: "/assets/skills/languages/am.png",
        link: "https://en.wikipedia.org/wiki/Armenian_language",
      },
      {
        name: "German (Mother Tongue)",
        flag: "/assets/skills/languages/de.png",
        link: "https://en.wikipedia.org/wiki/German_language",
      },
      {
        name: "Swiss German (Mother Tongue)",
        flag: "/assets/skills/languages/ch.png",
        link: "https://en.wikipedia.org/wiki/Swiss_German",
      },
      {
        name: "French (C1)",
        flag: "/assets/skills/languages/fr.png",
        link: "https://en.wikipedia.org/wiki/French_language",
      },
      {
        name: "English (C1)",
        flag: "/assets/skills/languages/us.png",
        link: "https://en.wikipedia.org/wiki/English_language",
      },
      {
        name: "Spanish (B2)",
        flag: "/assets/skills/languages/es.png",
        link: "https://en.wikipedia.org/wiki/Spanish_language",
      },
      {
        name: "Italian (B1)",
        flag: "/assets/skills/languages/it.png",
        link: "https://en.wikipedia.org/wiki/Italian_language",
      },
      {
        name: "Russian (A2)",
        flag: "/assets/skills/languages/ru.png",
        link: "https://en.wikipedia.org/wiki/Russian_language",
      },
    ],
  },
];

export const chessAchievements = [
  {
    name: "European Youth Chess Championship in Montenegro",
    year: "2013",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "Swiss Chess Champion (Girls U12)",
    year: "2013",
    icon: "/assets/skills/chess/trophy.svg",
  },
  {
    name: "Swiss Chess Champion (Boys U10)",
    year: "2014",
    icon: "/assets/skills/chess/trophy.svg",
  },
  {
    name: "European Youth Chess Championship in Georgia",
    year: "2014",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "World Youth Chess Championship in Greece",
    year: "2015",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "Swiss Chess Champion (Girls U12)",
    year: "2016",
    icon: "/assets/skills/chess/trophy.svg",
  },
  {
    name: "European Youth Chess Championship in Czech Republic",
    year: "2016",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "Swiss Rapid Chess Champion (Boys U14)",
    year: "2017",
    icon: "/assets/skills/chess/medal.svg",
  },
  {
    name: "Aargau Rapid Chess Champion (Boys U16)",
    year: "2017",
    icon: "/assets/skills/chess/medal.svg",
  },
  {
    name: "Swiss Chess Champion (Girls U14)",
    year: "2017",
    icon: "/assets/skills/chess/trophy.svg",
  },
  {
    name: "European Youth Chess Championship in Romania",
    year: "2017",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "World Youth Chess Championship in Greece",
    year: "2018",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "Swiss Chess Champion (Boys U16)",
    year: "2019",
    icon: "/assets/skills/chess/trophy.svg",
  },
  {
    name: "World Youth Chess Championship in India",
    year: "2019",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "European Team Chess Championship (Women) in Georgia",
    year: "2019",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "Mitropa Cup Women's Team in Switzerland",
    year: "2021",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "European Women Chess Championship in Romania",
    year: "2021",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "European Team Chess Championship (Women) in Slovenia",
    year: "2021",
    icon: "/assets/skills/chess/globe.svg",
  },
  {
    name: "Swiss Olympic Talent Card N (National Team)",
    year: "2022",
    icon: "/assets/skills/chess/award.svg",
  },
  {
    name: "Award from the Swiss Youth Chess Foundation for Outstanding Achievements",
    year: "2022",
    icon: "/assets/skills/chess/award.svg",
  },
];

const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillsData.map((skillCategory, index) => (
            <div
              className="skills-category"
              key={index}
              id={
                skillCategory.category === "FOREIGN LANGUAGES"
                  ? "languages"
                  : undefined
              }
            >
              <h3 className="category-title">{skillCategory.category}</h3>

              {skillCategory.subcategories ? (
                skillCategory.subcategories.map((subcategory, subIndex) => (
                  <div className="skills-subcategory" key={subIndex}>
                    <h4 className="subcategory-title">{subcategory.name}</h4>
                    <div className="skills-grid">
                      {subcategory.items.map((item, idx) => (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={idx}
                          className="skill-item"
                        >
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="skill-icon"
                          />
                          <div className="tooltip">
                            <p>{item.name}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="skills-grid">
                  {skillCategory.items.map((item, idx) => (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx}
                      className="skill-item"
                    >
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
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Chess Achievements Section */}
      <section id="chess" className="chess-section">
        <h2 className="section-title">Chess Achievements</h2>
        <div className="skills-category">
          <div className="skills-container">
            <div className="skills-grid">
              {chessAchievements.map((achievement, idx) => (
                <div className="skill-item" key={idx}>
                  <img
                    src={achievement.icon}
                    alt={achievement.name}
                    className="skill-icon"
                  />
                  <span className="year-display">{achievement.year}</span>
                  <div className="tooltip">
                    <p>{achievement.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
