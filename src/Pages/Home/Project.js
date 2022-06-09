import React from 'react'
import "./Projects.css";
import { NavLink } from 'react-router-dom';

const Project = (props) => {
    return (
        <div className='project-card'>
            <img src={props.img} alt="" />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                {/* <p>Text</p> */}
                <div className='pro-btns'>
                    <NavLink to="url.com" className="btn">Details</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Project