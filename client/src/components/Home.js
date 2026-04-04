import React from 'react';
const personalImg = "https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafybeicfwua22pwlordmjn47grln6nhay4neylufko4w5sllhsvmudcd54";
import projects from './projectsData';
import posts from './postsData';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import resumePdf from './docs/Resume.pdf';

const Home = () => {
    return (
            <div>
                <div className="member-container">
                    <div className="membro">
                        <img src={personalImg} className="imagem-circular"/>
                        <center>
                            <h3 className="fontezao3cor">CryptoVictor</h3>
                            <h4>Web3 Engineer building DeFi infrastructure and on-chain systems.</h4>
                            <a href={resumePdf} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 12, color: 'var(--text-secondary)', fontSize: '0.95rem', textDecoration: 'none' }}>
                                <FaDownload size={14} />
                            </a>
                        </center>
                    </div>
                </div>
                <br/>
                <hr className="line2"></hr>
                <div className="projects-container">
                    {posts.slice(0, 2).map(post => (
                      <Link to={`/${post.id}`} className="post-link" key={post.id}>
                        <div className="project-card">
                          <img src={post.image} className="project-logo" alt={post.title} />
                          <div className="post-content-2">
                            <h3 className="post-title-2">{post.title}</h3>
                            <p className="post-description-2">{post.subtitle}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
            </div>
    );
}

export default Home;