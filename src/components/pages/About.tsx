import React from "react";
import { motion } from "framer-motion";

import "./About.css";
import pavootLogo from "../../assets/pavoot-logo.svg";

const timelineData = [
  {
    title: "High School Graduation",
    date: "2019 - 2022",
    description:
      "Graduated from Alte Kantonsschule Aarau with a focus on economics & law. Skipped 11th grade and received a 6/6 grade for my thesis.",
    details: "Thesis: 'Armenia as a business location'.",
    logo: require("../../assets/aksa-logo.png"),
  },
  {
    title: "Chief Technology Officer at Mini-Enterprise",
    date: "2020 - 2021",
    description:
      "Participated in the YES Company Programme and co-founded a mini-enterprise called DiCeres. The business imported homemade Italian sugo and pasta to Switzerland to support a social cause.",
    details:
      "Responsibilities included creating and maintaining the website, designing the business plan, company report, flyers, and logo.",
    logo: require("../../assets/diceres-logo.jpg"),
  },
  {
    title: "CS Bachelor at ETH Zürich",
    date: "2022 - 2025",
    description:
      "Studied Computer Science at ETH Zürich, one of the world's top 5 universities for Computer Science.",
    details:
      "Foundations like Algorithms & Data Structures, plus core courses including AI in Education, IML, HCI, and Web Engineering.",
    logo: require("../../assets/eth-logo.png"),
  },
  {
    title: "Teaching Assistant at ETH Zürich",
    date: "2023",
    description:
      "Assisted in teaching ~45 students for 'Introduction to Programming'.",
    details: "Awarded best TA in the BSc Computer Science lectures.",
    logo: require("../../assets/eth-logo.png"),
  },
  {
    title: "WebApp Design Volunteer at voCHabular",
    date: "2023 - 2025",
    description:
      "Volunteered to create a WebApp digitizing exercises from the voCHabular books for German learners.",
    details:
      "Supports people learning German and adapting to Swiss life, with a focus on 'Schwiizertüütsch'.",
    logo: require("../../assets/vochabular-logo.png"),
  },
  {
    title: "High School CS Teacher",
    date: "2024 - 2025",
    description: "Taught Computer Science at Alte Kantonsschule Aarau.",
    details: "",
    logo: require("../../assets/aksa-logo.png"),
  },
  {
    title: "IT Architect at eGovernment St.Gallen digital",
    date: "Sept - Nov 2025",
    description: "",
    details: "ArchiMate & IT-Architektur.",
    logo: require("../../assets/egov-logo.png"),
  },
  {
    title: "Co-Founder at Pavoot (YC P26)",
    date: "Jan 2026 - Present",
    description:
      "Building the AI event manager for companies that run customer events. Pavoot helps teams source the right attendees, personalize invitations and follow-ups, capture conversations during events, and turn events into pipeline.",
    details:
      "Joined the Y Combinator P26 batch and moved to the San Francisco Bay Area. 🦚",
    logo: pavootLogo,
  },
];
const About = () => {
  return (
    <section id="about" className="about__container">
      {/* About Me Section */}
      <h2 className="about__title">About Me</h2>
      <div className="about__intro">
        <p>
          I'm the{" "}
          <span className="highlight-special">Co-Founder of Pavoot (YC P26)</span>
          , where we're building the{" "}
          <span className="highlight">AI event manager</span> for companies that
          run customer events. Pavoot helps teams identify the right attendees,
          manage invitations and follow-ups, capture conversations during
          events, and understand which relationships and event formats generate
          the most pipeline{" "}
          <a
            href="https://pavoot.com"
            className="inline-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            (see what we're building)
          </a>
          . Before going all in on the startup, I worked as an{" "}
          <span className="highlight">IT Architect</span> and studied{" "}
          <span className="highlight">Computer Science at ETH Zürich</span>, one
          of the world's top 5 universities for Computer Science. I skipped two
          grades along the way.
        </p>
        <p>
          I started playing <span className="highlight">chess</span> at age 4,
          became the youngest-ever member of Switzerland's national female chess
          team by 13, and by age 15 had already become a{" "}
          <span className="highlight-special">6x Swiss chess champion</span>{" "}
          <a href="#chess" className="inline-link">
            (explore my chess achievements)
          </a>
          . I also speak seven{" "}
          <a href="#languages" className="inline-link">
            languages
          </a>
          , including German, Swiss German, English, Armenian, French, and
          Spanish. One of my key strengths is the ability to learn new skills
          and technical concepts quickly and independently — I'm constantly
          seeking opportunities to grow through exciting new{" "}
          <a href="#projects" className="inline-link">
            projects
          </a>
          .
        </p>
      </div>

      {/* Education and Career Section */}
      <h2 className="about__title">Education and Career</h2>
      <div className="about__timeline">
        <svg
          className="timeline__spiral"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 1500"
          preserveAspectRatio="none"
        >
          <path
            d="M250 0 C205 100, 160 50, 275 230, S50 500, 290 760, S10 750, 290 1200"
            fill="none"
            stroke="var(--primary-dark)"
            strokeWidth="2"
          />
        </svg>
        {timelineData.toReversed().map((item, index) => (
          <motion.div
            key={index}
            className={`timeline__item ${index % 2 === 0 ? "left" : "right"}`}
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline__circle">
              <img src={item.logo} alt={`${item.title} logo`} />
            </div>
            <div className="timeline__content">
              <h3>{item.title}</h3>
              <p className="timeline__date">{item.date}</p>
              <p className="timeline__description">{item.description}</p>
              <p className="timeline__details">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
