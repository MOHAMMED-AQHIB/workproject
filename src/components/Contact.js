import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
