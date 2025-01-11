import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      {/* Logo */}
      <div className="navigation_left">
        <a href="#home" className="navigation_left-link">
          <span className="logo_name">Gohar Tamrazyan</span>
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="navigation_right">
        {["home", "about", "projects", "skills", "testimonials", "contact"].map(
          (item) => (
            <li key={item} className="navigation_link-item">
              <a href={`#${item}`} className="navigation_link">
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
