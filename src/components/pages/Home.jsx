import { motion } from "framer-motion";

import "./Home.css";
import profilePic from "../../assets/profile.png";

const Home = () => {
  return (
    <section id="home" className="home__container">
      {/* Background Circles */}
      <div className="home__background">
        <div className="home__background-circle home__circle--small"></div>
        <div className="home__background-circle home__circle--medium"></div>
        <div className="home__background-circle home__circle--large"></div>
      </div>

      {/* Intro Text */}
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="home__intro"
      >
        <div className="intro__box">
          <span className="wave-emoji">👋</span>
          <div className="intro__text">
            <p className="text-small">Hi there, I'm</p>
            <h1 className="text-large">Gohar Tamrazyan</h1>
          </div>
        </div>
        <div className="intro__points">
          <p className="point point-1">CS Student @ETHZ</p>
          <p className="point point-2">CS Teacher @AlteKanti Aarau</p>
          <p className="point point-3">Former Chess Player</p>
          <p className="point point-4">Passionate Teacher</p>
          <p className="point point-5">Design Enthusiast</p>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="home__image-container"
      >
        <img src={profilePic} alt="Gohar Tamrazyan" className="profile-image" />
      </motion.div>
    </section>
  );
};

export default Home;
