import React from 'react';
import logoinverted from './imgs/logoinverted.png';
import favicon from './imgs/favicon.svg';
import logo from './imgs/logo.png';

const Projects = () => {
    return (
        <div>
            <div className="projects-container">
                <br/>
                <a href="https://www.olympicbirds.com.br/">
                    <div className="project-card">
                        <img src={logoinverted} className="project-logo" />
                        <h4 class="fontzao8">Driven by the determination to transform Brazil, the Olympic Birds project has the fundamental purpose of increasing access to academic opportunities, such as science olympiads and university entrance exams. In addition, for those involved, it offers exceptional quality content to train them to the highest level.</h4>
                    </div>
                </a>
                <br/>
                <a href="https://github.com/SBTnfinder">
                    <div className="project-card">
                        <img src={favicon} className="project-logo" />
                        <h4 class="fontzao82">New type of SBT attached to an NFT instead of a wallet, with multiple use cases such as gaming, metaverse and more. Increasing the added value of the attached NFT.</h4>
                    </div>
                </a>
                <br/>
                <a href="https://github.com/CryptoVictor/Testochain">
                    <div className="project-card">
                            <img src={logo} className="project-logo" />
                        <h4 class="fontzao821">A cryptocurrency designed for testing and experimenting with blockchain technology features and the Web 3 revolution.</h4>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Projects;