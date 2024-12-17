import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">What Our Clients Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="text-center">
                <p className="lead">"BioBiz transformed our approach to biotech solutions!"</p>
                <h5>- John Doe</h5>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center">
                <p className="lead">"Innovative and reliable, BioBiz is the future of sustainability."</p>
                <h5>- Jane Smith</h5>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
