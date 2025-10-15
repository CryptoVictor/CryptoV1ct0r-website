import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="header">
      <div className="menu">
        <NavLink className="normal-link" to="/" end>Home</NavLink>
        <NavLink className="normal-link" to="/projects">Projects</NavLink>
        <NavLink className="normal-link" to="/blog">Blog</NavLink>
        <NavLink className="normal-link" to="/evolution">Evolution</NavLink>
      </div>
      <button 
        className="theme-toggle" 
        onClick={toggleDarkMode}
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Header;
