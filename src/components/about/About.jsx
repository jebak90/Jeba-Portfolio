import React from "react";
import developer from '../../assets/removebg.png';
import handcoding from '../../assets/hand_coding_gif.gif';
import './about.css';
import {FaReact,FaNodeJs,FaJenkins,FaGithub, FaDev} from 'react-icons/fa';
import Title from "../sectionhead/Title";


const About = ()=>{

    return(
        <div id="about" className="container container__bg">
            <div className="about__title"><Title title={"about"}/></div>
            <div className="about__container">
             <img style={{borderRadius:"50%"}} className="about__img" src={handcoding} width="300" height="300"></img> 
             <div>
                <div className="about__list">
                    <FaNodeJs className="about__list__icon"/>
                    <p className="about__content">
                        Over 5+ years of IT experience which includes 3+ years of React JS and Full Stack Developer.
                    </p>
                </div>

                <div className="about__list">
                    <FaDev className="about__list__icon"/>
                    <p className="about__content">
                        Experience in developing webpages using HTML5, CS5, Javascript,React JS, Redux and Node JS.
                    </p>
                </div>

                <div className="about__list">
                    <FaReact className="about__list__icon"/>
                    <p className="about__content">
                        Expertise in React JS to develop the SPA.               
                    </p>
                </div>

                <div className="about__list">
                    <FaGithub className="about__list__icon"/>
                    <p className="about__content">
                        Experience in writing end to end and Unit test cases using Cypress and Jest.
                    </p>
                </div>
            </div>
            </div> 

        </div>
    )
}


export default About;