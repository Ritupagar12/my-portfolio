import React, { useState } from "react";
import { FaLaptopCode, FaCertificate, FaLayerGroup } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiGit, SiTypescript, SiPython, SiVercel, SiVite, SiMongodb, SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";
import myPhoto from "../assets/images/profile.JPEG";

// Certificates
import webDevelopmentCert from "../assets/certificates/web-development.jpg";
import pythonCert from "../assets/certificates/python.jpg";
import softEngCert from "../assets/certificates/JPMorgan.jpg";
import ltimindtreeCert from "../assets/certificates/ltimindtree.jpeg";
import appDevelopmentCert from "../assets/certificates/app-development.jpg";
import cppCert from "../assets/certificates/c-cpp.jpg";
import coreJavaCert from "../assets/certificates/core-java.jpg";
import javaCert from "../assets/certificates/java.jpg";
import dataStructureCert from "../assets/certificates/data-structure.jpg";
import javaQuizCert from "../assets/certificates/java-quiz.jpg";

import "./About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experience = [
    {
      id: 1,
      role: "Software Engineer",
      company: "LTIMindtree",
      duration: "Dec 2023- Nov 2024",
      details: "Worked on AEM forms development and support for the Ministry of Corporate Affairs project. Created detailed user flow documentation to streamline processes and collaborated closely with QA and UAT teams to ensure smooth deployment and quality delivery."
    },
    {
      id: 2,
      role: "Graduate Trainee Engineer",
      company: "LTIMindtree",
      duration: "Sep 2023 - Dec 2023",
      details: "Completed structured full stack Java training covering HTML, CSS, JavaScript, TypeScript, Angular, Spring Boot, Git, and Agile methodologies. Gained hands-on experience through practical projects and assignments to strengthen development skills."
    },
  ];

  const certificates = [
    { id: 1, name: "Web Development", year: "2025", image: webDevelopmentCert },
    { id: 2, name: "Python Programming", year: "2025", image: pythonCert },
    { id: 3, name: "Software Engineering", year: "2025", image: softEngCert },
    { id: 4, name: "LTIMindtree Certification", year: "2024", image: ltimindtreeCert },
    { id: 5, name: "App Development", year: "2020", image: appDevelopmentCert },
    { id: 6, name: "C & C++", year: "2020", image: cppCert },
    { id: 7, name: "Core Java", year: "2021", image: coreJavaCert },
    { id: 8, name: "Java Programming", year: "2021", image: javaCert },
    { id: 9, name: "Data Structures", year: "2021", image: dataStructureCert },
    { id: 10, name: "Java Quiz", year: "2020", image: javaQuizCert },
  ];

  const techStack = [
    { icon: <SiHtml5 color="#E34F26" size={40} />, name: "HTML" },
    { icon: <SiCss3 color="#1572B6" size={40} />, name: "CSS" },
    { icon: <SiJavascript color="#F7DF1E" size={40} />, name: "JavaScript" },
    { icon: <SiReact color="#61DAFB" size={40} />, name: "React" },
    { icon: <SiNodedotjs color="#339933" size={40} />, name: "NodeJS" },
    { icon: <SiExpress color="#000000" size={40} />, name: "Express" },
    { icon: <SiTailwindcss color="#06B6D4" size={40} />, name: "Tailwind" },
    { icon: <SiGit color="#F05032" size={40} />, name: "Git" },
    { icon: <SiTypescript color="#3178C6" size={40} />, name: "TypeScript" },
    { icon: <DiJava color="#007396" size={40} />, name: "Java" },
    { icon: <SiPython color="#3776AB" size={40} />, name: "Python" },
    { icon: <SiVercel color="#000000" size={40} />, name: "Vercel" },
    { icon: <SiVite color="#646CFF" size={40} />, name: "Vite" },
    { icon: <SiMongodb color="#47A248" size={40} />, name: "MongoDB" },
    { icon: <SiMysql color="#4479A1" size={40} />, name: "SQL" },
  ];

  return (
    <section id="about" className="about-section py-16 px-4 md:px-16 bg-gray-50 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-2">About Me</h2>
      <p className="text-center text-gray-500 mb-6 italic">"Turning ideas into intuitive user experiences"</p>

      <div className="flex flex-col items-center mb-12">
        <img src={myPhoto} alt="Ritu Pagar" className="profile-photo mb-6" />
        <p className="text-center text-lg font-medium max-w-3xl mb-4">
          I am a Software Engineer with experience at LTIMindtree, where I contributed to the Ministry of Corporate Affairs project.
          I created user flow documents, developed features, and optimized workflows while working with AEM.
          Prior to that, I completed comprehensive full stack Java training, covering HTML, CSS, JavaScript, TypeScript, Angular, Spring Boot, Git, and Agile methodologies.
        </p>
        <p className="text-center max-w-3xl mb-4">
          Since relocating to New Zealand, I have been focusing on modern web development with React, NodeJS, Express, and TailwindCSS, building practical projects to sharpen my skills.
          When I am not coding, I explore the latest trends in web development, contribute to open-source projects, and continuously improve my skills.
          My goal is to combine creativity and technical expertise to deliver exceptional digital experiences.
        </p>

      </div>

      <div className="tabs flex justify-center gap-4 mb-8 flex-wrap">
        <button className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}><FaLaptopCode className="inline mr-2" /> Experience</button>
        <button className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`} onClick={() => setActiveTab('certificates')}><FaCertificate className="inline mr-2" /> Certificates</button>
        <button className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`} onClick={() => setActiveTab('tech')}><FaLayerGroup className="inline mr-2" /> Tech Stack</button>
      </div>

      <div className="tab-content">
        {activeTab === 'experience' && (
          <div className="experience-container flex justify-center flex-wrap gap-6">
            {experience.map(exp => (
              <div key={exp.id} className="card max-w-md p-4 bg-white rounded-xl shadow-lg">
                <h4 className="font-semibold mb-1">{exp.role}</h4>
                <p className="text-gray-500 mb-1">{exp.company}</p>
                <span className="text-gray-400 mb-2">{exp.duration}</span>
                <p className="text-gray-700">{exp.details}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="certificates-container">
            {certificates.map(cert => (
              <div key={cert.id} className="card">
                <img src={cert.image} alt={cert.name} className="w-full h-40 object-cover rounded-lg shadow-md" />
                <h4 className="font-semibold mt-2">{cert.name}</h4>
                <p className="text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="tech-container">
            {techStack.map((tech, i) => (
              <div key={i} className="tech-card">
                {tech.icon}
                <span className="text-gray-800 mt-1">{tech.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
