import React from 'react';
import posts from '../postsData';

const post = posts.find(p => p.id === 'post-1');

const Post1 = () => {
  if (!post) return <div>Post not found.</div>;
  return (
    <div>
      <div className="img-blogzin">
        <img className="blogzin" src={post.image} alt={post.title} />
      </div>
      <div>
        <h1 className="titulo">{post.title}</h1>
        <h3 className="subtitulo">{post.subtitle}</h3>
        <h5 className="details">By {post.author} | {post.date}</h5>
      </div>
      <br/>
      <center>
        <div className="textoelab">
          {post.content.map((paragraph, idx) => (
            <h3 className="texto" key={idx}>{paragraph}</h3>
          ))}
        </div>
      </center>
      <br/>
    </div>
  );
};

export default Post1;