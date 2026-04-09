import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

import bankingImg from "../../assets/banking_system.png";

const projects = [
  {
    name: "Banking App",
    desc: "A secure Java GUI banking application with account management and transaction history.",
    image: bankingImg,
    github: "https://github.com/yourusername/banking-app",
  },
  {
    name: "Banking App",
    desc: "A secure Java GUI banking application with account management and transaction history.",
    image: bankingImg,
    github: "https://github.com/yourusername/banking-app",
  },
  {
    name: "Banking App",
    desc: "A secure Java GUI banking application with account management and transaction history.",
    image: bankingImg,
    github: "https://github.com/yourusername/banking-app",
  },
  {
    name: "Banking App",
    desc: "A secure Java GUI banking application with account management and transaction history.",
    image: bankingImg,
    github: "https://github.com/yourusername/banking-app",
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

        {/* --- ADDED DESCRIPTION --- */}
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
            {/* IMAGE */}
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </div>

            {/* CONTENT */}
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}