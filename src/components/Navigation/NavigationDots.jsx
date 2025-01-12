import React, { useState, useEffect } from "react";
import "./NavigationDots.css";

const NavigationDots = () => {
  const sections = [
    { piece: "♔", title: "Home", href: "#home" },
    { piece: "♕", title: "About", href: "#about" },
    { piece: "♖", title: "Projects", href: "#projects" },
    { piece: "♗", title: "Skills", href: "#skills" },
    { piece: "♘", title: "Chess", href: "#chess" },
    { piece: "♙", title: "Contact", href: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current scroll position
      const viewportHeight = window.innerHeight;

      // Loop through sections and check which one is in view
      sections.forEach(({ href }) => {
        const sectionElement = document.querySelector(href);
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;

          // Check if the section is visible
          if (
            scrollPosition >= offsetTop - viewportHeight / 2 &&
            scrollPosition < offsetTop + offsetHeight - viewportHeight / 2
          ) {
            setActiveSection(href);
          }
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleClick = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(href);
    }
  };

  return (
    <div className="navigation-dots">
      {sections.map((section, index) => (
        <button
          key={index}
          className={`navigation-dot ${
            activeSection === section.href ? "active" : ""
          }`}
          data-title={section.title}
          onClick={() => handleClick(section.href)}
        >
          {section.piece}
        </button>
      ))}
    </div>
  );
};

export default NavigationDots;
