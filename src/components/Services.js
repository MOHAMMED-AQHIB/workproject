import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="bi bi-flask fs-1 text-primary"></i>
            <h4 className="mt-3">Research & Development</h4>
            <p>Innovative research tailored to your needs.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-globe fs-1 text-primary"></i>
            <h4 className="mt-3">Global Partnerships</h4>
            <p>Building connections worldwide.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-tree fs-1 text-primary"></i>
            <h4 className="mt-3">Sustainability</h4>
            <p>Driving eco-friendly solutions for the future.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
