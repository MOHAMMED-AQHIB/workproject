import React from "react";

const Testimonials = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div className="row">
          <div className="col-md-6">
            <blockquote className="border rounded p-4">
              "BioBiz transformed our approach to biotech solutions!"
              <footer className="mt-3">- John Doe</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote className="border rounded p-4">
              "Reliable and innovative solutions every time."
              <footer className="mt-3">- Jane Smith</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
