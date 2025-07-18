import React from 'react';
import posts from './postsData';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className="projects-container">
                <br/>
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
                <br/>
            </div>
        </div>
    );
}

export default Blog;