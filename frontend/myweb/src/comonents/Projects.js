import React from "react";


const projects = [
  {
    id: 1,
    name: "Modern Furniture",
    technologies: "MERN Stack",
    github: "https://github.com/Alxdeveloper",
  },
  {
    id: 2,
    name: "Student Management System",
    technologies: "MERN Stack",
    github: "https://github.com/Alxdeveloper",
  },
  {
    id: 3,
    name: "MERNaUTH",
    technologies: "MERN Stack",
    github: "https://github.com/Alxdeveloper",
  },
];

const Projects = () => {
  return (
    <div className="bg-dark text-white py-5" id="project">
      <div className="container px-3">
        <h2 className="text-center fw-bold display-5 mb-5">My Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div
                className="card bg-secondary border-0 h-100 text-center shadow-sm"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src=''
                  alt={project.name}
                  className="card-img-top rounded-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">{project.name}</h3>
                  <p className="text-light">{project.technologies}</p>
                  <a
                    href={project.github}
                    className="btn btn-success"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
