import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <h1 className="hero-name">Hi, I'm Ritu Pagar</h1>
        <h2 className="hero-role">Software Engineer</h2>

        <p className="hero-description">
          I’m a former LTIMindtree engineer now expanding my expertise in modern web development.
          I build responsive, user-focused applications using React, Node.js, and Express.
          With hands-on experience in full stack Java development, I enjoy turning ideas into practical, well-designed projects.
        </p>

        <div className="hero-buttons">
          <button onClick={scrollToProjects} className="btn-primary">
            View My Work
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            Let's Connect
          </button>
        </div>

        <p className="hero-quote">“Keep Learning. Keep Building”</p>

        <button onClick={scrollToNext} className="down-arrow animate-bounce">↓</button>
      </div>
    </section>
  );
};

export default Hero;
