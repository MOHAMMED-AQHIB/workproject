import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      className="hero d-flex align-items-center justify-content-center text-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6d5dfc, #a56eff)",
        color: "white",
      }}
    >
      <div className="container">
        <h1 data-aos="fade-down">Welcome to BioBiz</h1>
        <ReactTyped
  strings={["Innovating the Future", "Sustainability at Its Core", "Your Partner in Biotech"]}
  typeSpeed={60}
  backSpeed={50}
  loop
/>

        <p className="lead mt-3" data-aos="fade-up">
          Explore groundbreaking solutions for a sustainable tomorrow.
        </p>
        <a href="#services" className="btn btn-light mt-3" data-aos="zoom-in">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
