import React, { useState } from "react";
import './experience.css';
import html from '../../assets/html5.png';
import css from '../../assets/css3.png';
import react from '../../assets/react.png';
import js from '../../assets/js.png';
import nodejs from '../../assets/node-js.png';
import mongodb from '../../assets/mongodb.png';

const Skill = ()=>{

    const [iconList,setIconList] = useState([
                                                {icon:html,text:"HTML"},
                                                {icon:css,text:"CSS"},
                                                {icon:js,text:"JavaScript"},
                                                {icon:react,text:"React JS"},
                                                {icon:nodejs,text:"Node JS"},
                                                {icon:mongodb,text:"MongoDB"}
                                            ])

    return(

            <div className="skill__container">
                {
                    iconList?.map((data,index)=>{
                        return(
                                <div className="skill__box">
                                    <div className="bg__circle">
                                        <img src={data.icon} width={35} height={35}></img>
                                        
                                    </div>
                                    <p className="skill__para">{data.text}</p>
                                </div>
                            )
                        })
                }
            </div>

    )
}

export default Skill;