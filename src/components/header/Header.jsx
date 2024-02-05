import React from "react";
import developer from '../../assets/code_review_without_bg.gif';
// import developer from '../../assets/hand_coding.gif';
import './header.css';
import CTA from "./CTA";

const Header = ()=>{

    return(
        <div className="container header__container">
            <img className="header__content" src={developer} width="300" height="300"></img>    
            <div className="header__content">
                <h1 className="header__name">Hi, I'm Jeba</h1>  
                <p>
                    Experienced Frontend Developer with 5.9 years of crafting user-friendly 
                    and visually appealing websites. Proficient in React.js and passionate 
                    about solving coding puzzles. Proven track record of delivering top-notch projects. 
                    Let's turn your ideas into seamless digital experiences! Open for exciting 
                    opportunities.
                </p>  

                <CTA/>
            </div>

            
        </div>
    )
}

export default Header;