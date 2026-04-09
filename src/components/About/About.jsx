import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./About.css";
import aboutImg from "../../assets/profile.jpg";

const About = ({ isDarkMode }) => {
  return (
    <section className={`about-section ${isDarkMode ? "dark" : "light"}`} id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* 🔹 Title */}
          <h2 className="about-title text-center">
            About <span>Me</span>
          </h2>

          <p className="about-subtitle text-center">
            An undergraduate Software Engineering student passionate about building
            modern, user-friendly applications and growing through real-world experience.
          </p>

          <Row className="align-items-center mt-5 g-5">

            {/* 🔹 LEFT SIDE */}
            <Col lg={4} className="text-center">

              <div className="about-img-box">
                <img src={aboutImg} alt="profile" />
              </div>

              <div className="uni-box">
                <strong>University of Wolverhampton</strong>
                <p>BSc(Hons) Computer Science (Software Engineering)</p>
              </div>

            </Col>

            {/* 🔹 RIGHT SIDE */}
            <Col lg={8}>

              <div className="info-card">
                <h5>Who I Am</h5>
                <p>
                  I’m an undergraduate Software Engineering student who enjoys building
                  clean and efficient applications while solving real-world problems.
                </p>
              </div>

              <div className="info-card">
                <h5>What I Build</h5>
                <p>
                  I develop responsive web & mobile applications with a focus on modern UI,
                  performance, and usability.
                </p>
              </div>

              <div className="info-card">
                <h5>My Mindset</h5>
                <p>
                  I believe in continuous learning, writing maintainable code, and turning
                  ideas into impactful solutions.
                </p>
              </div>



              {/* 🔹 Status */}
              <div className="status">
                Available for internships & freelance projects
              </div>

              {/* 🔹 Buttons */}
              <div className="btn-group-custom">
                <Button href="/cv.pdf" download className="btn-main">
                  Download CV
                </Button>
              </div>

            </Col>
          </Row>

        </motion.div>
      </Container>
    </section>
  );
};

export default About;