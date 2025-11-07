import React, { useState, useEffect } from 'react';
import './About.scss';
import ContactForm from '../Common/ContactForm/ContactForm';
import img1 from "../../asset/images/doctor.jpg";
import img2 from "../../asset/images/inventory.jpg";
import img3 from "../../asset/images/skincare.jpg";
import img4 from "../../asset/images/irotree.jpg";

const About = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Health.iQ",
      subtitle: "Online Doctor & Nurse Learning Platform",
      description: "Features secure authentication, structured medical courses, and interactive learning tools. Optimized for performance and user experience.",
      tech: "React.js, RTK Query",
      image: img1
    },
    {
      id: 2,
      title: "Womeora",
      subtitle: "Natural Skincare & Wellness E-commerce Platform",
      description: "Seamless shopping, wishlist/cart management, intuitive UI. Built with React.js, Redux Toolkit, RTK Query.",
      tech: "React.js, Redux Toolkit, RTK Query",
      image: img3
    },
    {
      id: 3,
      title: "iRotree",
      subtitle: "Rotary International Web Design",
      description: "Built with React and Material UI. Service organization platform for global community leaders.",
      tech: "React, Material UI",
      image: img4
    },
    {
      id: 4,
      title: "CorpWork",
      subtitle: "Inventory Management System",
      description: "Modern inventory management with React.js, Sass, RTK Query. Real-time stock, supplier, and order tracking. Responsive, user-friendly interface.",
      tech: "React.js, Sass, RTK Query",
      image: img2
    }
  ];

  const handleContactClick = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [projects.length]);

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
            <div className="projects-carousel">
              <div className="carousel-container">
                <button className="carousel-btn prev" onClick={prevProject}>
                  ‹
                </button>
                <div className="project-slide">
                  <div className="project-image">
                    <img src={projects[currentProject].image} alt={projects[currentProject].title} />
                  </div>
                  <div className="project-content">
                    <h4>{projects[currentProject].title}</h4>
                    <h5>{projects[currentProject].subtitle}</h5>
                    <p>{projects[currentProject].description}</p>
                    <div className="project-tech">
                      <span>Tech Stack: {projects[currentProject].tech}</span>
                    </div>
                  </div>
                </div>
                <button className="carousel-btn next" onClick={nextProject}>
                  ›
                </button>
              </div>
              <div className="carousel-dots">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentProject ? 'active' : ''}`}
                    onClick={() => setCurrentProject(index)}
                  />
                ))}
              </div>
            </div>
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