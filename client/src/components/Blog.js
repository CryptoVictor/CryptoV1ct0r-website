import React from 'react';
import blog from './imgs/blog.jpg';
import { Routes, Route, Link } from 'react-router-dom';


const Blog = () => {
    return (
        <div>
            <div className="projects-container">
                <br/>
                <Link to="/post-1" class="post-link">
                    <div className="project-card">
                        <img src={blog} className="project-logo" />
                        <div className="post-content-2">
                            <h3 className="post-title-2">Why am I creating a blog?</h3>
                            <p className="post-description-2">Telling more about how this idea came to my mind</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Blog;