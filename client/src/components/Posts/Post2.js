import React from 'react';
import posts from '../postsData';

const Post2 = () => {
    const post = posts.find(p => p.id === "post-2");
    
    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return (
        <div className="textoelab">
            <div className="img-blogzin">
                <img src={post.image} alt={post.title} className="blogzin" />
            </div>
            <h1 className="titulo">{post.title}</h1>
            <h2 className="subtitulo">{post.subtitle}</h2>
            <div className="details">
                {post.date} • {post.author}
            </div>
            {post.content.map((paragraph, index) => (
                <p key={index} className="texto">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default Post2; 