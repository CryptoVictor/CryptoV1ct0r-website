import React from 'react';
const personalImg = "https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafybeicfwua22pwlordmjn47grln6nhay4neylufko4w5sllhsvmudcd54";
import projects from './projectsData';
import posts from './postsData';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
            <div>
                <div className="member-container">
                    <div className="membro">
                        <img src={personalImg} className="imagem-circular"/>
                        <center>
                            <h3 className="fontezao3cor">CryptoVictor</h3>
                            <h4>I'm a Computer Science student at the Institute of Technology and Leadership (Inteli) passionate about technology, blockchain, and new challenges.</h4>
                        </center>
                    </div>
                </div>
                <hr className="line2"></hr>
                <br/>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                  <div className="container" style={{display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', alignItems: 'center', width: 'auto', margin: 0}}>
                      {projects.map((project, idx) => (
                        <a href={project.link} key={project.name} target="_blank" rel="noopener noreferrer">
                          <img
                            src={project.image}
                            className="image"
                            alt={project.name}
                          />
                        </a>
                      ))}
                  </div>
                </div>
                <br/>
                <hr className="line2"></hr>
                <div className="projects-container">
                    {posts.map(post => (
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