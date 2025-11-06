import React, { useState } from 'react';
import './Header.scss';
import { useTheme } from '../../../contexts/ThemeContext';

const Header = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" aria-label="Site Owner">
          <h1>KARTHIK.K</h1>
        </div>
        
        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} aria-label="Main Navigation">
          <ul>
            <li><a href="#home" onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('home');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>Home</a></li>
            <li><a href="#about" onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>About</a></li>
            <li><a href="#projects" onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>Contact</a></li>
            <li>
              <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
                Resume
              </a>
            </li>
            <li>
              <button 
                className="theme-toggle" 
                onClick={toggleTheme}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;