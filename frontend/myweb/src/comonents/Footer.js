import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container px-3">
        <div className="row align-items-center mb-4">
          {/* Left Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="h4 fw-bold"> Murangiri</h3>
            <p className="text-secondary">
              Full-Stack Developer based in Kenya, specializing in web and
              software development.
            </p>
          </div>

          {/* Right Section - Subscription Form */}
          <div className="col-md-6">
            <form className="d-flex">
              <input
                type="email"
                placeholder="Your email"
                className="form-control rounded-start bg-secondary border-0 text-white"
                style={{ outline: "none" }}
              />
              <button
                type="submit"
                className="btn btn-primary rounded-end m-2"
                style={{
                  background: "linear-gradient(to right, #32cd32, #1e90ff)",
                  border: "none",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-top border-secondary pt-3">
          <div className="row align-items-center">
            {/* Copyright Text */}
            <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
              <p className="text-secondary mb-0">
                &copy; {new Date().getFullYear()} Denis. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <div className="d-flex justify-content-center">
                <a href="#" className="text-secondary mx-2">
                  <FaFacebook />
                </a>
                <a href="#" className="text-secondary mx-2">
                  <FaTwitter />
                </a>
                <a href="#" className="text-secondary mx-2">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-secondary mx-2">
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Privacy and Terms Links */}
            <div className="col-md-4 text-center text-md-end">
              <a href="#" className="text-secondary mx-2">
                Privacy
              </a>
              <a href="#" className="text-secondary mx-2">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
