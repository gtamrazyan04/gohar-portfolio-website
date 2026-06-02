import React, { useState } from "react";
import "./Navigation.css";
import { FiDownload } from "react-icons/fi";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      {/* Logo and Name */}
      <div className="navigation_left">
        <a href="#home" className="navigation_left-link">
          <img src="/logo_header.png" alt="logo" className="logo_image" />
          <span className="logo_name">Gohar Tamrazyan</span>
        </a>
      </div>
      {/* Menu Icon (☰) */}
      <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      {/* Navigation Links */}
      <ul className={`navigation_right ${menuOpen ? "open" : ""}`}>
        {["home", "about", "pavoot", "projects", "skills", "chess", "contact", "CV"].map(
          (item) => (
            <li key={item} className="navigation_link-item">
              {item === "CV" ? (
                <a
                  href="/assets/CV_Gohar_English.pdf" // Replace with the correct path to your CV file
                  className="navigation_link"
                  download // This triggers the file download
                  target="_blank" // Opens the file in a new tab if it's a direct link
                  rel="noopener noreferrer" // Security best practice for external links
                >
                  <FiDownload size={16} style={{ marginRight: "6px" }} />
                  CV
                </a>
              ) : (
                <a
                  href={`#${item}`}
                  className="navigation_link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              )}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
