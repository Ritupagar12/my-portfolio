import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "./ProjectsData";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const projectSection = document.getElementById("projects");
      if(projectSection) {
        projectSection.scrollIntoView({behavior: "smooth"});
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={handleBack}
            className="text-blue-600 hover:underline font-semibold"
          >
            ← Back to Projects
          </button>
        </div>

        <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded mb-6"
        />

        {/* Live Links */}
        <div className="flex flex-wrap gap-4 mb-4">
          {project.liveFrontend && (
            <a
              href={project.liveFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition text-center"
            >
              Frontend
            </a>
          )}
          {project.liveAdmin && (
            <a
              href={project.liveAdmin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition text-center"
            >
              Admin
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition text-center"
            >
              Live Demo
            </a>
          )}

          {/* View Code button right below live links */}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition text-center"
            >
              View Code
            </a>
          )}

          {/* Admin Demo (ShopBud only) */}
          {project.adminDemo && (
            <span className="px-4 py-2 bg-yellow-400 text-gray-800 rounded text-center">
              Demo: {project.adminDemo.email} / {project.adminDemo.password}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-800 px-2 py-1 text-sm rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        {project.highlights && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Installation */}
        {project.installation && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Installation & Setup</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
              {project.installation}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;