import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import linkedin from './imgs/linkedin.png';
import github from './imgs/github.png';
import instagram from './imgs/logotipo-do-instagram.png';
import youtube from './imgs/youtube.png';
import Projects from './Projects';
import Blog from './Blog';
import Post1 from './Posts/Post1';

class App extends Component {
    render() {
        return (
            <div class="app-container">
                <div class="header">
                    <div class="header-right">
                        <div class="menu">
                            <Link class="normal-link" to="/">Home</Link>
                        </div>
                        <div class="menu">
                            <Link class="normal-link" to="/projects">Projects</Link>
                        </div>
                        <div class="menu">
                            <Link class="normal-link" to="/blog">Blog</Link>
                        </div>
                    </div>
                </div>
                <div class="appzin">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/post-1" element={<Post1/>}/>
                    </Routes>
                </div>
                <br/>
                <hr class="linediff"></hr>
                <div class="contimg">
                    <a href="https://www.linkedin.com/in/victor-garcia-dos-santos/"><img class="logo-social" src={linkedin}></img></a>
                    <a href="https://github.com/CryptoVictor"><img class="logo-social" src={github}></img></a>
                    <a href="https://www.instagram.com/v1ct0rgarcia/"><img class="logo-social" src={instagram}></img></a>
                    <a href="https://www.youtube.com/@CryptoVictor07"><img class="logo-social" src={youtube}></img></a>
                </div>
            </div>
        );
    }
}

export default App;