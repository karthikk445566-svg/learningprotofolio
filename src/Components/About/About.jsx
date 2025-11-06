import React, { useState } from 'react';
import './About.scss';
import ContactForm from '../Common/ContactForm/ContactForm';

const About = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>FRONTEND UI/UX DEVELOPER</h2>
          <h1 style={{ letterSpacing: '0.2em', fontWeight: 700 }}>KARTHIK.K</h1>
          <p>
            Passionate Frontend Developer specializing in React.js and Next.js with 2.5 years of professional experience building intuitive, fast, and responsive web applications. Skilled at transforming complex ideas into seamless user experiences with clean, efficient code and modern UI principles.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-content">
            <h3>Summary</h3>
            <p>
              I’m a creative and detail-oriented developer with a strong understanding of JavaScript, RTK Query, Sass, and modern front-end workflows. I focus on writing maintainable code, improving application performance, and delivering pixel-perfect interfaces that align with business goals. My approach blends technical precision with design thinking to create products that users love.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">2.5</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Languages</span>
            </div>
          </div>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">💻</div>
              <h4>Skills</h4>
              <p>HTML, CSS, Bootstrap, Material-UI, JavaScript, React JS, Next.js, Node JS, SASS</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎓</div>
              <h4>Education</h4>
              <p>B.TECH (INFORMATION TECHNOLOGY)<br />2015-2019 – SNS College of Engineering</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏢</div>
              <h4>Experience</h4>
              <p>2.5 years at Techno Tackle Software Solutions, Coimbatore</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌐</div>
              <h4>Languages</h4>
              <p>Tamil, English</p>
            </div>
          </div>
          <div className="about-cta">
            <h3>Projects</h3>
            <ul style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', color: 'inherit' }}>
              <li><strong>Health.iQ</strong> – Online Doctor & Nurse Learning Platform (React.js, RTK Query)<br />Features secure authentication, structured medical courses, and interactive learning tools. Optimized for performance and user experience.</li>
              <li><strong>Womeora</strong> — Natural Skincare & Wellness E-commerce Platform<br />Seamless shopping, wishlist/cart management, intuitive UI. Built with React.js, Redux Toolkit, RTK Query.</li>
              <li><strong>iRotree</strong> — Rotary International Web Design<br />Built with React and Material UI. Service organization platform for global community leaders.</li>
              <li><strong>CorpWork</strong> — Inventory Management System<br />Modern inventory management with React.js, Sass, RTK Query. Real-time stock, supplier, and order tracking. Responsive, user-friendly interface.</li>
            </ul>
            <button className="cta-button" onClick={handleContactClick}>Get in Touch</button>
          </div>
        </div>
      </div>
      {isContactFormOpen && (
        <ContactForm onClose={handleCloseContactForm} />
      )}
    </section>
  );
};

export default About;