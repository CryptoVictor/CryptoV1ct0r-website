import React from 'react';
import VictorGarcia from './imgs/Victor-Garcia.jpeg';
import logo from './imgs/logo.png';
import logoinverted from './imgs/logoinverted.png';
import favicon from './imgs/favicon.svg';
import blog from './imgs/blog.jpg';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
    return (
            <div>
                <div class="member-container">
                    <div class="membro">
                        <img src={VictorGarcia} class="imagem-circular"/>
                        <center>
                            <h3 class="fontezao3cor">Victor Garcia</h3>
                            <h4>I am a Computer Science student at the Institute of Technology and Leadership (Inteli) with a desire to discover technology and meet new challenges.</h4>
                        </center>
                    </div>
                </div>
                <hr class="line2"></hr>
                <br/>
                <Link class="linkzin" to="/projects">
                    <h3 class="fontezao3cor">Projects</h3>
                </Link>
                <br/>
                <div className="container">
                    <a href="https://github.com/CryptoVictor/Testochain">
                        <img
                        src={logo}
                        className="image"
                        />
                    </a>
                    <a href="https://www.olympicbirds.com.br/">
                        <img
                        src={logoinverted}
                        className="image"
                        />
                    </a>
                    <a href="https://github.com/SBTnfinder">
                        <img
                        src={favicon}
                        className="image"
                        />
                    </a>
                </div>
                <br/>
                <hr class="line2"></hr>
                <br/>
                <Link class="linkzin" to="/blog">
                    <h3 class="fontezao3cor">Blog</h3>
                </Link>
                <Link class="post-link" to="/post-1">
                    <div className="post-container">
                        <div className="post-block">
                            <img src={blog} className="post-image left" />
                            <div className="post-content">
                                <h3 className="post-title">Why am I creating a blog?</h3>
                                <p className="post-description">Telling more about how this idea came to my mind</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
    );
}

export default Home;