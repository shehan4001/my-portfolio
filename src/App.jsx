import React, { useState, useEffect } from 'react';
import MyNavbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import BackgroundAnimation from './components/Hero/BackgroundAnimation';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  return (
    <div className="app-container">
       <BackgroundAnimation darkMode={darkMode} />
      {/* ✅ Animation එක මෙතන එක පාරක් විතරක් */}
      

      <div className="content-overlay">
        <MyNavbar darkMode={darkMode} toggleTheme={toggleTheme} />

        <main>
          <section id="home">
            <Hero isDarkMode={darkMode} />
          </section>

          <section id="about">
            <About isDarkMode={darkMode} />
          </section>

          <section id="skills">
            <Skills isDarkMode={darkMode} />
          </section>

          <section id="projects">
            <Projects isDarkMode={darkMode} />
          </section>

          <section id="contact">
            <Contact isDarkMode={darkMode} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;