import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroImg from '../HeroImg/HeroImg';
import Work from './Work';
import Contact from './Contact';
import HeroImg2 from '../HeroImg/HeroImg2';
import About from './About';
import AboutContent from './AboutContent';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImg></HeroImg>
            <HeroImg2 heading="PROJECTS" text="Some of my Porjects"></HeroImg2>
            <Work></Work>
            <About></About>
            <AboutContent></AboutContent>
            <Contact></Contact>
        </div>
    );
};

export default Home;