import React from "react";

const Hero = () => {
  return (
    <section className="hero bg-light py-5 text-center">
      <div className="container">
        <h2>Your Partner in Biotechnology</h2>
        <p className="lead">
          Explore groundbreaking solutions that drive innovation and
          sustainability.
        </p>
        <img
          src="https://via.placeholder.com/900x400"
          alt="Hero"
          className="img-fluid rounded mt-3"
        />
      </div>
    </section>
  );
};

export default Hero;
