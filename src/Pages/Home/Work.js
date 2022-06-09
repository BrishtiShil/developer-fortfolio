import React from 'react'
import "./Projects.css";
import WorkDetails from "./WorkDetails";
import Project from './Project';

const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                {WorkDetails.map((val, ind) => {
                    return (
                        <Project
                            key={ind}
                            img={val.img}
                            title={val.title}
                        ></Project>
                    )
                })}
            </div>
        </div>
    )
}

export default Work