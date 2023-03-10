import React from "react";
import image from '../logo192.png'


const Navbar =()=>{
    return(
        <nav className="nav">
                <img src={image}/>
                <h3>ReactFacts</h3>
            <h4>
                React Course - Project 1
            </h4>
        </nav>
        
    )
}

export default Navbar;