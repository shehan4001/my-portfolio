import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', category: 'Frontend', value: 85, color: 'teal' },
    { name: 'CSS / Tailwind', category: 'Frontend', value: 75, color: 'teal' },
    { name: 'React', category: 'Frontend', value: 70, color: 'teal' },
    { name: 'Node.js', category: 'Backend', value: 70, color: 'yellow' },
    { name: 'JavaScript', category: 'Language', value: 80, color: 'pink' },
    { name: 'C#', category: 'Language', value: 80, color: 'pink' },
    { name: 'Python', category: 'Language', value: 75, color: 'pink' },
  ];

  const softSkills = ['Teamwork','Problem Solving','Communication','Creativity','Adaptability','HR Management'];
  const tools = ['Git','GitHub','Visual Studio','VS Code','Figma','Canva','ClickUp','MS Office'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? technicalSkills
      : technicalSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="skills-section-wrapper py-5" id="skills">
      <Container>

        {/* TITLE */}
        <div className="text-center mb-5">
          <h2 className="skills-main-title fw-bold">Skills & Expertise</h2>
          <p className="skills-description-text mx-auto">
            A blend of technical expertise, management strengths, and collaborative tools.
          </p>
        </div>

        <Row className="g-4">

          {/* LEFT */}
          <Col lg={7}>
            <div className="skills-card">

              <div className="section-header">

                <h3>Technical Skills</h3>
              </div>

              {/* CATEGORY FILTER */}
              <div className="category-filter">
                {['All', 'Frontend', 'Backend', 'Language'].map(cat => (
                  <span
                    key={cat}
                    className={`filter ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {filteredSkills.map((skill, i) => (
                <div key={i} className="skill-item">

                  <div className="skill-top">
                    <div className="left">
                      <span className={`dot ${skill.color}`}></span>
                      <span className="name">{skill.name}</span>
                      <span className={`badge ${skill.color}`}>
                        {skill.category}
                      </span>
                    </div>
                    <span className="percent">{skill.value}%</span>
                  </div>

                  <div className="bar">
                    <div
                      className={`fill ${skill.color}`}
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>

                </div>
              ))}

            </div>
          </Col>

          {/* RIGHT */}
          <Col lg={5}>
            <div className="right-side">

              {/* Soft Skills */}
              <div className="skills-card">
                <div className="section-header">

                  <h3>Soft Skills</h3>
                </div>

                <div className="pill-container">
                  {softSkills.map((s, i) => (
                    <span key={i} className="pill">{s}</span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="skills-card">
                <div className="section-header">

                  <h3>Tools & Platforms</h3>
                </div>

                <div className="tool-grid">
                  {tools.map((t, i) => (
                    <div key={i} className="tool-item">{t}</div>
                  ))}
                </div>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Skills;