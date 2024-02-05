import React, { useState } from "react";
import './experience.css';
import Skill from "./Skill";
import ExperienceList from "./ExperienceList";
import Title from "../sectionhead/Title";

const Experience = ()=>{

    return(
        <div id="experience" className="container">
            <Title title={"experience"}/>
            <div >
                <div className="experience__container">
                    <Skill/> 
                    <ExperienceList/>                   
                </div>
            </div>
        </div>
    )
}

export default Experience;