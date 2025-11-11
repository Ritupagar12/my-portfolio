import React from "react";
import { useNavigate } from "react-router-dom";
import projects from "./ProjectsData";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-16 px-4 md:px-16 bg-gray-50 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-2">Projects</h2>
      <p className="text-gray-500 text-center mb-12 italic">
        Some of the projects I've worked on recently
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition flex flex-col"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 flex-1">{project.shortDesc}</p>
              <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition w-full text-center">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;