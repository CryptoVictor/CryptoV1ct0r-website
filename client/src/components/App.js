import React, { Component } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import Home from './Home';
import Projects from './Projects';
import Blog from './Blog';
import Post1 from './Posts/Post1';
import Post2 from './Posts/Post2';
import Evolution from './Evolution';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="header">
                    <div className="menu">
                        <NavLink className="normal-link" to="/" end>Home</NavLink>
                        <NavLink className="normal-link" to="/projects">Projects</NavLink>
                        <NavLink className="normal-link" to="/blog">Blog</NavLink>
                        <NavLink className="normal-link" to="/evolution">Evolution</NavLink>
                    </div>
                </div>
                <div className="appzin">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/post-1" element={<Post1/>}/>
                        <Route path="/post-2" element={<Post2/>}/>
                        <Route path="/evolution" element={<Evolution/>}/>
                    </Routes>
                </div>
                <footer className="footer">
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, marginBottom: 8 }}>
                    <a href="https://www.linkedin.com/in/victor-garcia-dos-santos/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin className="logo-social" size={16} /></a>
                    <a href="https://github.com/CryptoVictor" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub className="logo-social" size={16} /></a>
                    <a href="https://www.instagram.com/v1ct0rgarcia/" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram className="logo-social" size={16} /></a>
                    <a href="https://www.youtube.com/@CryptoVictor07" target="_blank" rel="noopener noreferrer" title="YouTube"><FaYoutube className="logo-social" size={16} /></a>
                  </div>
                  © 2025 CryptoVictor. All rights reserved.
                </footer>
            </div>
        );
    }
}
export default App;