import React from "react";
import portfolioImg from "../assets/projects/portfolio.png";
import tictactoeImg from "../assets/projects/tictactoe.png";
import notexImg from "../assets/projects/notex.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built using React and TailwindCSS showcasing projects, skills, and experience.",
    tech: ["React", "Custom CSS", "TailwindCSS", "JavaScript", "Vite"],
    image: portfolioImg,
    live: "https://my-portfolio-one-gamma-81.vercel.app/",
    code: "https://github.com/Ritupagar12/my-portfolio",
  },
  {
    id: 2,
    title: "TicTacToe Game",
    description:
      "A fun TicTacToe game built with React and TailwindCSS featuring a responsive design and interactive UI.",
    tech: ["React", "HTML", "CSS", "TailwindCSS", "JavaScript"],
    image: tictactoeImg,
    live: "https://tic-tac-toe-y62g.vercel.app/",
    code: "https://github.com/Ritupagar12/tic-tac-toe",
  },
  {
    id: 3,
    title: "NoteX App",
    description:
      "Note-taking application built using React and CSS. Allows creating, editing, and deleting notes efficiently.",
    tech: ["React", "HTML", "CSS", "JavaScript", "LocalStorage API"],
    image: notexImg,
    live: "https://notex-react-app.vercel.app/",
    code: "https://github.com/Ritupagar12/Notex-React_App",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-16 bg-gray-50 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-2">Projects</h2>
      <p className="text-gray-500 text-center mb-12 italic">
        Some of the projects I've worked on recently
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition"
                >
                  View Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border-2 border-gray-800 text-gray-800 rounded-full font-medium hover:bg-gray-800 hover:text-white transition"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
