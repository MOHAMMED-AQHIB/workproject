import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">Our Services</h2>
        <div className="row">
          {[
            { title: "Research & Development", icon: "bi bi-flask", text: "Innovative research tailored to your needs." },
            { title: "Global Partnerships", icon: "bi bi-globe", text: "Building connections worldwide." },
            { title: "Sustainability", icon: "bi bi-tree", text: "Driving eco-friendly solutions for the future." },
          ].map((service, index) => (
            <div key={index} className="col-md-4" data-aos="zoom-in">
              <div className="card text-center p-4 border-0 shadow-sm">
                <i className={`${service.icon} text-primary fs-1`}></i>
                <h4 className="mt-3">{service.title}</h4>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
