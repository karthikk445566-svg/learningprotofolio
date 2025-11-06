import React, { useState } from 'react';
import './Home.scss';
import About from '../About/About';
import ContactForm from '../Common/ContactForm/ContactForm';
import img1 from "../../asset/images/first.png";
import img2 from "../../asset/images/second.jpg";


const Home = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

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
            <div className="image-container">
              <img src={img1} alt="Karthik.K - Frontend Developer" />
              <div className="floating-elements">
                <div className="floating-icon react">⚛️</div>
                <div className="floating-icon js">🟨</div>
                <div className="floating-icon css">🎨</div>
                <div className="floating-icon node">🟢</div>
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