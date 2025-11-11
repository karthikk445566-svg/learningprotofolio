import React, { useState, useEffect } from 'react';
import './Home.scss';
import About from '../About/About';
import ContactForm from '../Common/ContactForm/ContactForm';
import img1 from "../../asset/images/first.png";
import img2 from "../../asset/images/second.jpg";
import img3 from "../../asset/images/third.png";
import img4 from "../../asset/images/forth.png";
import img5 from "../../asset/images/fifth.jpg";
import img6 from "../../asset/images/sixth.png";
import img7 from "../../asset/images/seven.png";
import img8 from "../../asset/images/img8.jpg";
import img9 from "../../asset/images/img9.jpg";
import img10 from "../../asset/images/img10.png";


import { FaReact, FaNodeJs, FaGitAlt, FaAws, FaSass, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTypescript, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";

const Home = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDarkMode(theme === 'dark');
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    
    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <div className="home" id="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Karthik.K</h1>
            <h2 className="subtitle">F R O N T E N D&nbsp; U I / U X&nbsp; D E V E L O P E R</h2>
            <p>
              Dedicated and detail-oriented React.js and Next.js Developer with 2.5 years of experience in designing and developing scalable, user-centric web applications. Proficient in JavaScript, Redux, RTK Query, Sass, HTML, and CSS, with a strong focus on clean architecture and performance optimization. Committed to leveraging modern front-end technologies to deliver efficient, reliable, and business-driven solutions while continuously enhancing technical expertise.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="cta-button">View My Work</a>
              <a href="#contact" className="cta-button secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            {/* <div className="image-container">
              <img src={img3} alt="Karthik.K - Frontend Developer" />
              <div className="floating-elements">
                <div className="floating-icon react">⚛️</div>
                <div className="floating-icon js">🟨</div>
                <div className="floating-icon css">🎨</div>
                <div className="floating-icon node">🟢</div>
                <div className="floating-icon html">🧡</div>
                <div className="floating-icon sass">💗</div>
                <div className="floating-icon git">🔴</div>
                <div className="floating-icon aws">🟠</div>
                <div className="floating-icon mongodb">🟤</div>
                <div className="floating-icon nextjs">⚫</div>
                <div className="floating-icon redux">🟣</div>
                <div className="floating-icon typescript">🔵</div>
              </div>
            </div> */}


            <div className="image-container">
              <img src={isDarkMode ? img3 : img10} alt="Karthik.K - Frontend Developer" />
                            {/* <img src={img3} alt="Karthik.K - Frontend Developer" /> */}
              <div className="floating-elements">
                {/* 🌐 Frontend */}
                <div className="floating-icon react"><FaReact /></div>
                {/* <div className="floating-icon nextjs"><SiNextdotjs /></div> */}
                <div className="floating-icon js"><SiJavascript /></div>
                <div className="floating-icon typescript"><SiTypescript /></div>
                <div className="floating-icon html"><FaHtml5 /></div>
                <div className="floating-icon css"><FaCss3Alt /></div>
                <div className="floating-icon sass"><FaSass /></div>
                <div className="floating-icon git"><FaGitAlt /></div>
                {/* <div className="floating-icon aws"><FaAws /></div> */}
                <div className="floating-icon aws"><SiTailwindcss /></div>

                {/* ⚙️ Backend */}
                <div className="floating-icon node"><SiRedux /></div>
                {/* <div className="floating-icon node"><FaNodeJs /></div> */}
                {/* <div className="floating-icon mongodb"><SiMongodb /></div> */}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="skills">
        <div className="skills-container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Frontend</h3>
              <p>React.js,Next.js, Vue.js, JavaScript, HTML5, CSS3/SASS</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Backend</h3>
              <p>Node.js, MongoDB, Express.js</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Tools</h3>
              <p>Git Lab, Git Hub, AWS, CI/CD</p>
            </div>
            {/* <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>Mobile</h3>
              <p>React Native, Flutter, Responsive Design</p>
            </div> */}

          </div>
        </div>
      </section>

      <About />

      <section className="featured-work" id="projects">
        <div className="featured-container">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={img1} alt="Project 1" />
              </div>
              <div className="project-info">
                <h3>E-Commerce Platform</h3>
                <p>A full-stack e-commerce solution with React and Node.js</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Live</a>
                  <a href="#" className="project-link">Source Code</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={img2} alt="Project 2" />
              </div>
              <div className="project-info">
                <h3>Task Management App</h3>
                <p>A responsive task management application with real-time updates</p>
                <div className="project-tags">
                  <span>Vue.js</span>
                  <span>Firebase</span>
                  <span>SCSS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Live</a>
                  <a href="#" className="project-link">Source Code</a>
                </div>
              </div>
            </div>
          </div>
          <div className="view-all">
            <a href="#projects" className="cta-button">View All Projects</a>
          </div>
        </div>
      </section>

      <section className="contact-cta" id="contact">
        <div className="cta-content">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? I'd love to help bring it to life.</p>
          <button className="cta-button" onClick={handleContactClick}>Get In Touch</button>
        </div>
      </section>
      {isContactFormOpen && (
        <ContactForm onClose={handleCloseContactForm} />
      )}
    </div>
  );
};

export default Home;