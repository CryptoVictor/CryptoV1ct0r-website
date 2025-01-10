import React from 'react';
import blog from '../imgs/blog.jpg';

const Post1 = () => {
  return (
    <div>
      <div class="img-blogzin">
        <img class="blogzin" src={blog}></img>
      </div>
      <div>
        <h1 class="titulo">Why am I creating a blog?</h1>
        <h3 class="subtitulo">Telling more about how this idea came to my mind</h3>
        <h5 class="details">By CryptoV1ct0r | 09/01/2025</h5>
      </div>
      <br/>
      <center>
        <div class="textoelab">
            <h3 class="texto">
            I’ve been thinking about starting a blog because many of my projects lack a proper space for discussion. I want to share my ideas more broadly, and although blogging might seem a bit old-fashioned, it feels like the perfect medium for me. I won’t deny that a big inspiration behind this idea came from someone I deeply admire—Vitalik Buterin, who also has a blog. But beyond that, there are other reasons driving this decision.
            </h3>
            <h3 class="texto">
            For example, a blog offers much more room for expression compared to platforms like Twitter. Here, I’ll be able to dive deeper into my thoughts on new technologies and share my perspectives on them. When my team and I created the SBTn technology, I wasn’t able to fully discuss its impact or promote it beyond the hackathon where it was developed. A blog seems like the perfect place for that.
            </h3>
            <h3 class="texto">
            I also see this as an opportunity to explore a wide range of topics that I’ve always wanted to talk about—AI, blockchain, my vision for the future of Web 3.0, algorithms, and even personal experiences. The possibilities are endless, and I’m excited to finally have a space to share all of this. That’s why I decided to create this blog.
            </h3>
        </div>
      </center>
      <br/>
    </div>
  );
};

export default Post1;