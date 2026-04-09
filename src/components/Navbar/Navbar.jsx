import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import './Navbar.css';

const MyNavbar = ({ darkMode, toggleTheme }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const sections = [
    { id: "#about", label: "About" },
    { id: "#skills", label: "Skills" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" }
  ];

  const handleNavClick = (sectionId) => {
    setActiveTab(sectionId);
    setExpanded(false);
    
    if (sectionId === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.querySelector(sectionId);
    if (el) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let currentSection = "";

      sections.forEach((section) => {
        const el = document.querySelector(section.id);
        if (el) {
          if (el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
            currentSection = section.id;
          }
        }
      });

      setActiveTab(currentSection);
      if (window.scrollY < 50) setActiveTab("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <Navbar 
      expanded={expanded} 
      expand="lg" 
      variant={darkMode ? 'dark' : 'light'} 
      className={`custom-navbar sticky-top ${darkMode ? 'navbar-dark-bg' : 'navbar-light-bg'}`}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
        >
          <span className="text-primary">My</span>Portfolio
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")} 
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {sections.map((section) => (
              <Nav.Link
                key={section.id}
                as="span"
                onClick={() => handleNavClick(section.id)}
                className={`nav-custom-link ${activeTab === section.id ? "active-tab" : ""}`}
                style={{ cursor: 'pointer' }}
              >
                {section.label}
              </Nav.Link>
            ))}

            <div className="theme-toggle-wrapper mt-lg-0 mt-2" onClick={toggleTheme}>
              {darkMode ? 
                <BsSunFill className="theme-icon sun-icon" /> : 
                <BsMoonStarsFill className="theme-icon moon-icon" />
              }
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;