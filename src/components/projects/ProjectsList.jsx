import React, { useState } from "react";
import kea from '../../assets/kea.png';
import covid from '../../assets/covid.jpg';
import SHI from '../../assets/star.jpg';
import getfocussed from '../../assets/getfocussed.jpg';
import './projects.css';
import ProjectButton from "./ProjectButton";
import Title from "../sectionhead/Title";

const ProjectsList = ()=>{

    const [projectsList, setProjectsList] = useState([
        {projectName:"Star Health Insurance", projectImage:SHI, description:`SHI has two online applications used by agents and customers to punch health insurance policies for individuals and groups of people.`, languages:['React','Material UI', 'Cypress']},
        {projectName:"Kea", projectImage:kea, description:`A cloud based low-code data platform, that can mine millions of rows of data to provide answers and more, in the language you speak. We would like to call it a Smart, Virtual Data Analyst by your side, always!"`, languages:['React','Tailwind','JavaScript']},
        {projectName:"GetFocused", projectImage:getfocussed, description:`Get Focused is a mobile educational application that lets students track their studies & manage time. It also lets them take breaks & maintain a healthy mind."`, languages:['ReactNative','JavaScript']},
        {projectName:"Covid Risk Assessment", projectImage:covid, description:`The app uses advanced algorithms to analyze user data, including symptoms, exposure history, and travel patterns, to generate a risk score. "`, languages:['Android','Rasa']},
        // {projectName:"Kea", projectImage:kea, description:`A cloud based low-code data platform, that can mine millions of rows of data to provide answers and more, in the language you speak. We would like to call it a Smart, Virtual Data Analyst by your side, always!"`, languages:['React','Tailwind','JavaScript']},
        // {projectName:"Kea", projectImage:kea, description:`A cloud based low-code data platform, that can mine millions of rows of data to provide answers and more, in the language you speak. We would like to call it a Smart, Virtual Data Analyst by your side, always!"`, languages:['React','Tailwind','JavaScript']},
    ])

    return(
        <>
            <div className="container"><Title title={"projects"}/></div>
            <div className="container projectList__container" id="projects">
                
                {
                    projectsList.map((project,index)=>
                        <div className="project__container">
                            <img className="project__image" src={project.projectImage} alt=""/>
                            <div>
                                <h2 style={{width:"max-content"}}>{project.projectName}</h2>
                                <p>{project.description}</p>
                            </div>
                            {/* Languages List */}
                            <div style={{flexWrap:"nowrap"}} className="projectList__container language__list">
                                {
                                    project.languages.map((language)=>{
                                        return (
                                            <div className="language__container">{language}</div>
                                        )
                                    })
                                }
                            </div>
                            
                            
                            {/* Project Button Component */}
                            {/* <ProjectButton/> */}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ProjectsList;