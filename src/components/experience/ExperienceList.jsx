import React from "react";
import {FaBeer,} from 'react-icons/fa';
import './experience.css';
import ABS from '../../assets/abs_logo.png';

const ExperienceList = ()=>{

    return(
        <div>
            <div className="experience__list">
                    {/* <ABS className="experience__list__icon"/> */}
                    <img src={ABS} width={50} height={50} className="experience__list__icon"/>
                    <div className="experience__content">
                        <h2>Senior Software Engineer</h2>
                        <small>Alpha Business Solutions Pvt.Ltd   - (April'2018 - present)</small>
                        <div>
                            <ul>
                                <li>Lead a team of front end developers in the successful delivery of 3 projects</li>
                                <li>Developed and maintained web applications using cutting-edge technologies such as React.js, Angular.</li>
                                <li>Collaborated with backend developers to design and implement RESTful APIs for seamless data integration</li>
                            </ul>
                        </div>
                    </div>
            </div>
            {/* <div className="experience__list">
                    <FaBeer className="experience__list__icon"/>
                    <p className="experience__content">
                        Experience in developing webpages using HTML5, CS5, Javascript,React JS, Redux and Node JS.
                    </p>
            </div> */}
        </div>
    )
}

export default ExperienceList;