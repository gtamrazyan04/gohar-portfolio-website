import React from "react";
import { motion } from "framer-motion";

import "./About.css";

const timelineData = [
  {
    title: "High School Graduation",
    date: "2019 – 2022",
    description:
      "Graduated from Alte Kantonsschule Aarau with a focus on economics & law. Skipped 11th grade and received a 6/6 grade for my thesis.",
    details: "Thesis: 'Armenia as a business location'.",
    logo: require("../../assets/aksa-logo.png"),
  },
  {
    title: "Chief Technology Officer at Mini-Enterprise",
    date: "2020 – 2021",
    description:
      "Participated in the YES Company Programme and co-founded a mini-enterprise called DiCeres. The business imported homemade Italian sugo and pasta to Switzerland to support a social cause.",
    details:
      "Responsibilities included creating and maintaining the website, designing the business plan, company report, flyers, and logo.",
    logo: require("../../assets/diceres-logo.jpg"),
  },
  {
    title: "CS Bachelor at ETH Zurich",
    date: "2022 – Present",
    description:
      "Pursuing a Computer Science degree. Expected graduation in 2025.",
    details:
      "Courses include Foundations such as Algorithms & Data Structures, and core courses like AI in Education, IML, HCI, Web Engineering, and more.",
    logo: require("../../assets/eth-logo.png"),
  },
  {
    title: "Teaching Assistant at ETH Zurich",
    date: "2023",
    description:
      "Assisted in teaching ~45 students for 'Introduction to Programming'.",
    details: "Awarded for the best TA in BSc Computer Science lectures.",
    logo: require("../../assets/eth-logo.png"),
  },
  {
    title: "Web App Design Volunteer at voCHabular",
    date: "Feb 2023 – Present",
    description:
      "Volunteered to create a WebApp where exercises from the voCHabular books are digitized for German learners.",
    details:
      "The app supports individuals learning German and adapting to Swiss life, focusing on 'Schwiizertüütsch'.",
    logo: require("../../assets/vochabular-logo.png"), // Replace with correct logo
  },
  {
    title: "High School CS Teacher",
    date: "2024 – Present",
    description:
      "Teaching Computer Science at Alte Kantonsschule Aarau with a 43.5% position.",
    details: "Focus on Python, algorithms, and student motivation.",
    logo: require("../../assets/aksa-logo.png"),
  },
];

const About = () => {
  return (
    <section id="about" className="about__container">
      <h2 className="about__title">About My Education and Career</h2>
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
            stroke-width="2"
          />
        </svg>
        {timelineData.map((item, index) => (
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
