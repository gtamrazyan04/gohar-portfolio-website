import React, { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for reaching out.");
  };

  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={contactRef} className="contact__container">
      <h2 className="contact__title">Get in Touch</h2>
      <div className="contact__content">
        {/* Contact Form */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="contact__submit-btn">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="contact__info">
          <div className="contact__info-item">
            <a href="mailto:gtamrazyan@ethz.ch">
              <FaEnvelope className="contact__icon" />
              gtamrazyan@ethz.ch
            </a>
          </div>
          <div className="contact__info-item">
            <a
              href="https://www.linkedin.com/in/gohar-tamrazyan-401860293/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact__icon" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
