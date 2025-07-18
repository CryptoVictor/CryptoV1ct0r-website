import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => (
  <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2 style={{ marginBottom: 32, fontWeight: 700 }}>Contact & Social</h2>
    <div style={{ display: 'flex', gap: 48, justifyContent: 'center', alignItems: 'center' }}>
      <a href="https://www.linkedin.com/in/victor-garcia-dos-santos/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FaLinkedin size={64} color="#0077b5" style={{ transition: 'transform 0.2s' }} className="logo-social" />
      </a>
      <a href="https://github.com/CryptoVictor" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FaGithub size={64} color="#232526" style={{ transition: 'transform 0.2s' }} className="logo-social" />
      </a>
      <a href="https://www.instagram.com/v1ct0rgarcia/" target="_blank" rel="noopener noreferrer" title="Instagram">
        <FaInstagram size={64} color="#e1306c" style={{ transition: 'transform 0.2s' }} className="logo-social" />
      </a>
      <a href="https://www.youtube.com/@CryptoVictor07" target="_blank" rel="noopener noreferrer" title="YouTube">
        <FaYoutube size={64} color="#ff0000" style={{ transition: 'transform 0.2s' }} className="logo-social" />
      </a>
    </div>
    <p style={{ marginTop: 40, color: '#666', fontSize: 18 }}>Feel free to reach out through any of the social networks above!</p>
  </div>
);

export default Contact; 