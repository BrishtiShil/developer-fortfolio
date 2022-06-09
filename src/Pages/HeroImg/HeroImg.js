import './HeroImg.css';
import React from 'react';
import img from '../../Images/img.png';
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={img} alt="img" />
            </div>
            <div className="content">
                <p>Hi, I'm Brishti</p>
                <h1>Front-End Developer</h1>
                <Link to="/projects" className="btn">Projects</Link>
                <a className='btn btn-light' href="https://drive.google.com/file/d/1BocoUSypGgDfVDL_WL6BczMefAsn3rnK/view?usp=sharing">Resume</a>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    );
};

export default HeroImg;