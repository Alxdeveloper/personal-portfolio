import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark text-white px-3">
      <div className="container py-2">
        {/* Brand */}
        <a className="navbar-brand fw-bold d-none d-md-block text-danger" href="#">
          Denis
        </a>

        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-center justify-content-md-between" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contacts">
                Contact
              </a>
            </li>
          </ul>
          {/* Button */}
          <button
            className="btn btn-primary d-none d-md-inline-block"
            style={{
              background: 'linear-gradient(to right, #32cd32, #1e90ff)',
              border: 'none',
            }}
          >
            Connect Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
