import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="bg-dark text-white py-5" id="contact">
      <div className="container px-3">
        <h2 className="text-center fw-bold display-5 mb-5">Contact Me</h2>
        <div className="row align-items-center">
          {/* Contact Info */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="fw-bold text-success mb-3">Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className="mb-3">
              <FaEnvelope className="text-success me-2" />
              <a href="mailto:dmurangiri92@gmail.com" className="text-light text-decoration-none">
                dmurangiri92@gmail.com
              </a>
            </div>
            <div className="mb-3">
              <FaPhone className="text-success me-2" />
              <span>+254 701 152 721</span>
            </div>
            <div className="mb-3">
              <FaMapMarkedAlt className="text-success me-2" />
              <span>112, 60100, Embu, Kenya</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control bg-secondary text-light border-0 rounded"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control bg-secondary text-light border-0 rounded"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control bg-secondary text-light border-0 rounded"
                  rows="5"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
