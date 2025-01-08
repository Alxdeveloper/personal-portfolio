import React from "react";

const About = () => {
  return (
    <div className="bg-dark text-white py-5" id="about">
      <div className="container px-3">
        <h2 className="text-center fw-bold display-5 mb-5">About Me</h2>
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src=''
              alt="About Me"
              className="w-100 h-auto rounded mb-4 mb-md-0"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <p className="fs-4 mb-4">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="mb-4">
              {/* Skill Progress Bars */}
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label htmlFor="htmlcss">HTML & CSS</label>
                  <span>80%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-gradient-success"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label htmlFor="reactjs">React JS</label>
                  <span>90%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-gradient-success"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label htmlFor="nodejs">Node JS</label>
                  <span>75%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-gradient-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="row text-center mt-5">
              <div className="col-md-4 mb-4">
                <h3 className="fw-bold text-success">3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="col-md-4 mb-4">
                <h3 className="fw-bold text-success">50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="col-md-4 mb-4">
                <h3 className="fw-bold text-success">10+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
