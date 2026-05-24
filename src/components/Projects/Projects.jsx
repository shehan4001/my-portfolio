import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaPlayCircle } from "react-icons/fa";
import "./Projects.css";

import trackerImg from "../../assets/My_Expense_Tracker.png";
import SMSImg from "../../assets/SMS.png";
import UniSphereImg from "../../assets/UniSphere.png";
import PortfolioImg from "../../assets/Portfolio.png";

const projects = [
  {
    name: "My Expense Tracker",
    desc: "A modern React Native expense tracking application with real-time analytics, transaction management, category-based spending insights, and a clean user interface.",
    image: trackerImg,
    github: "https://github.com/shehan4001/My-Expense_Tracker.git",
    demoVideo: "https://drive.google.com/file/d/18eCHk3HiPMshtdhPUOCMCQh2oPiBMdrm/view?usp=sharing",
  },
  {
    name: "Student Management System",
    desc: "Developed a Student Management System using Java in Eclipse IDE with a modern and user-friendly interface for managing students, courses, lecturers, and records efficiently.",
    image: SMSImg,
    github: "https://github.com/shehan4001/Student_Management_System.git",
    demoVideo: "https://drive.google.com/file/d/16cIR8EpxXGGZelmAw8Pzevgwg-5QTB1_/view?usp=sharing",
  },
   {
    name: "UniSphere",
    desc: "Developed UniSphere, a React-based Campus Management System with student, admin, events, facilities, and analytics management features through a modern and user-friendly interface.",
    image: UniSphereImg,
    github: "https://github.com/shehan4001/unisphere-nova-solution.git",
    demoVideo: "https://drive.google.com/file/d/1RwzCS0MxFNjPIpp-tsaI8aorTamwd34_/view?usp=sharing",
  },
  {
    name: "My Portfolio",
    desc: "Developed a modern and responsive personal portfolio website using React and TypeScript, showcasing my skills, projects, and professional profile with interactive UI/UX and clean dark-themed design.",
    image: PortfolioImg,
    github: "https://github.com/shehan4001/my-portfolio.git",
    demoVideo: "https://drive.google.com/file/d/1Xu0LIwhpKwmGgn0AF_4KS4cVQ5TL9G4k/view?usp=sharing",
  },
 
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header text-center">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="projects-main-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore a collection of my recent work, ranging from desktop applications
          to modern web development projects.
        </motion.p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <h3 className="project-title-text">{project.name}</h3>
              <p className="project-desc-text">{project.desc}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub size={20} />
                <span>View on GitHub</span>
              </a>

              <a
                href={project.demoVideo}
                target="_blank"
                rel="noreferrer"
                className="demo-video-btn"
              >
                <FaPlayCircle size={20} />
                <span>Watch Demo Video</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}