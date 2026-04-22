import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import './Navbar.css';

const MyNavbar = ({ darkMode, toggleTheme }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const navbarRef = useRef(null);

  const sections = useMemo(
    () => [
      { id: "#about", label: "About" },
      { id: "#skills", label: "Skills" },
      { id: "#projects", label: "Projects" },
      { id: "#contact", label: "Contact" }
    ],
    []
  );

  const getNavbarHeight = () => {
    return navbarRef.current?.offsetHeight || 80;
  };

  const handleNavClick = (sectionId) => {
    setActiveTab(sectionId);
    setExpanded(false);

    const scrollAfterCollapse = () => {
      const navbarHeight = getNavbarHeight();
      const extraGap = 20;

      if (sectionId === "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return;
      }

      const el = document.querySelector(sectionId);

      if (el) {
        const elementPosition =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight -
          extraGap;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }
    };

    if (window.innerWidth <= 991) {
      setTimeout(scrollAfterCollapse, 300);
    } else {
      scrollAfterCollapse();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + getNavbarHeight() + 60;
      let currentSection = "";

      sections.forEach((section) => {
        const el = document.querySelector(section.id);

        if (el) {
          const sectionTop = el.offsetTop;
          const sectionBottom = sectionTop + el.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id;
          }
        }
      });

      setActiveTab(window.scrollY < 50 ? "" : currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sections]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const isMobile = window.innerWidth <= 768;

      if (
        isMobile &&
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [expanded]);

  return (
    <Navbar
      ref={navbarRef}
      expanded={expanded}
      expand="lg"
      variant={darkMode ? 'dark' : 'light'}
      className={`custom-navbar sticky-top ${darkMode ? 'navbar-dark-bg' : 'navbar-light-bg'}`}
    >
      <Container fluid className="navbar-inner">
        <Navbar.Brand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          style={{ cursor: 'pointer' }}
        >
          <span className="text-primary">My</span>Portfolio
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center nav-right">
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

            <div
              className="theme-toggle-wrapper mt-lg-0 mt-2"
              onClick={toggleTheme}
            >
              {darkMode ? (
                <BsSunFill className="theme-icon sun-icon" />
              ) : (
                <BsMoonStarsFill className="theme-icon moon-icon" />
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;