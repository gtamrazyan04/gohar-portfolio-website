import React from "react";
import { motion } from "framer-motion";

import "./Pavoot.css";
import pavootLogo from "../../assets/pavoot-logo.svg";

const Pavoot = () => {
  return (
    <section id="pavoot" className="pavoot__container">
      <h2 className="pavoot__title">What I'm Building</h2>

      <motion.div
        className="pavoot__intro"
        whileInView={{ opacity: [0, 1], y: [40, 0] }}
        transition={{ duration: 0.6 }}
      >
        <img src={pavootLogo} alt="Pavoot logo" className="pavoot__logo" />
        <p>
          I'm the Co-Founder of{" "}
          <a
            href="https://pavoot.com"
            className="pavoot__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pavoot (YC P26)
          </a>
          , the AI event manager for companies that run customer events. We help
          teams source the right attendees, personalize each guest's experience,
          and turn events into pipeline — from invitations and follow-ups to
          capturing the conversations that actually drive revenue.
        </p>
      </motion.div>

      <motion.div
        className="pavoot__video"
        whileInView={{ opacity: [0, 1], scale: [0.96, 1] }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          src="https://www.youtube.com/embed/SvJtGNtOS50"
          title="Pavoot launch video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      <a
        href="https://pavoot.com"
        className="pavoot__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a demo & organize your dream event →
      </a>
    </section>
  );
};

export default Pavoot;
