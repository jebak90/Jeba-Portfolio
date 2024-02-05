import React, { useState } from "react";
import './topbar.css';
import {FaHamburger} from 'react-icons/fa'

const TopBar = (props) => {

    const [showMenu, setShowMenu] = useState(false);
    const [menuList, setMenuList] = useState([
        {id:"about", menuName:"About"},
        {id:"experience", menuName:"Experience"},
        {id:"projects", menuName:"Projects"},
        {id:"contact", menuName:"Contact"},
    ])

    const openCloseMenu = ()=>{
        setShowMenu(!showMenu)
    }

    return(
        <div className="container topbar_container">
            <h2 className="header_text">Jeba's Portfolio</h2>
            <nav>
                {/* <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a> */}
                {
                    menuList.map((menu,index)=>
                        <a href={`#${menu.id}`}>{menu.menuName}</a>
                    )
                }
            </nav>

            <FaHamburger className="menu__icon" onClick={openCloseMenu}/>

            {
                showMenu && 

                <ul className="menu">
                    {
                         menuList.map((menu,index)=>
                            <li><a href={`#${menu.id}`}>{menu.menuName}</a></li>
                        )
                    }
                </ul>
            }
        </div>
    )
}

export default TopBar;