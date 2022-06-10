import './AboutContent.css';
import React from 'react';
import about from '../../Images/about.png';
import about1 from '../../Images/about1.png';

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>I am Brishti</h1>
                <p>I'm a react font-end developer.I create responsive secure website for my clients.Works with html,css,react,bootstarp,tailwind,mongodb,heroku,firebase,netlify.</p>
            </div>
        </div>
    );
};

export default AboutContent;