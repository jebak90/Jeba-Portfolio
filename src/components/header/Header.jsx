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
                    I’m a full-stack developer with 5 years
                    of experience using React and NodeJS.
                    Reach out if you’d like to learn more!
                </p>  

                <CTA/>
            </div>

            
        </div>
    )
}

export default Header;