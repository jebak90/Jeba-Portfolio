import React, { useState } from "react";
import {FaMailBulk, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import './contact.css';

const Contact = ()=>{

    const [contactList, setContactList] = useState(
        [
            {icon:<FaMailBulk/>,contactData:"jpriskillal@gmail.com",type:"email"},
            {icon:<FaLinkedinIn/>,contactData:"https://www.linkedin.com/in/jeba-priskillal-79916955/", type:"linkedin"},
            {icon:<FaGithub/>,contactData:"jpriskillal@gmail.com",type:"github"},
        ]
    )

    return(
        <div className="contact__bg">
            <div id="contact" className=" container contact__container">
                    <div style={{textAlign:"center"}}>
                        <h1>Contact</h1>
                        <h3>Feel free to Reach Out!</h3>
                    </div>

                    <div>
                        {
                            contactList.map((contact,index)=>{
                                return(
                                    <>
                                        
                                        <p> 
                                            {contact.icon}  
                                            {
                                                contact.type == "email" ?
                                                    <a className="contact__link" href="mailto:`${contact.contactData}`">{contact.contactData}</a>
                                                :   <a className="contact__link" href={contact.contactData} target="_blank" >{contact.contactData}</a>
                                            }
                                        </p>                      
                                    </>
                                )
                            })
                        }
                    </div>
            </div>
        </div>
    )
}


export default Contact;

