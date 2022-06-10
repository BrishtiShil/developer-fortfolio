import './WorkCard.css';
import React from 'react';
import project1 from "../../Images/project1.png";
import project2 from "../../Images/project2.png";
import project3 from "../../Images/project3.png";
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.img} alt="" />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <div className='pro-btns'>
                    <NavLink to="url.com" className="btn">Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;