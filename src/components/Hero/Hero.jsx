import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';
import profileImg from '../../assets/profile.jpg';

const Hero = () => {
  const handleScrollToSection = (sectionId) => {
    const el = document.querySelector(sectionId);
    const navbar = document.querySelector('.custom-navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    const extraGap = 10;

    if (el) {
      const top =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        extraGap;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-center"
      id="home"
    >
      <Container className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="profile-img-wrapper">
            <img src={profileImg} alt="Shehan Samith" className="profile-img" />
          </div>

          <h1 className="hero-title">
            <span className="hero-hi-text">Hi, I'm</span> <span>Shehan Samith</span>
          </h1>

          <p className="hero-subtitle">
            A passionate professional blending <span>Software Development</span>,{' '}
            <span>Project Management</span>, <span>Human Resources</span>, and{' '}
            <span>Creative Design</span> to craft impactful solutions.
          </p>

          <p className="hero-description mx-auto">
            I focus on creating meaningful user experiences and delivering projects with clarity and purpose.
            By combining technical expertise with user-centered thinking, I build solutions that truly make an impact.
          </p>

          <div className="hero-buttons d-flex gap-3 justify-content-center flex-wrap">
            <Button
              className="hero-btn-main"
              onClick={() => handleScrollToSection('#projects')}
            >
              View My Work
            </Button>

            <Button
              className="hero-btn-outline"
              onClick={() => handleScrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="hero-social-links">
            <a href="https://github.com/shehan4001" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shehan-samith-isuranga-2a057736b"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:shehansamith942@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;