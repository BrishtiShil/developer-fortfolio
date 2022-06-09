import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroImg from '../HeroImg/HeroImg';
import Project from './Project';
import Work from './Work';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImg></HeroImg>
            <Work></Work>
            <Contact></Contact>
            <Project></Project>
        </div>
    );
};

export default Home;