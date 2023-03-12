import React from "react";
import { ReactDOM } from "react";
import myimg from '../profil.png'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/react-fontawesome';
import  '@fortawesome/fontawesome-svg-core'

const Info =()=>{
    return (
        <div className="info">
            <img src={myimg}/>
            <h3 className="name">Madicke Cisse</h3>
            <p className="job">Frontend Developer</p>
            <p className="website">cissemadicke.website</p>
            <div className="btn-container">
                <button className="git"><i class="fa-brands fa-github"></i> GitHub</button>
                <button className="linkdn"><i className="fa-brands fa-linkedin"></i> Linkedin</button>
            </div>
        </div>
    )
}

export default Info;