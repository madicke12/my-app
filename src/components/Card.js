import React  from "react";
import img from '../profil.png';
const Card =()=> {
    return(
        <div className="card">
            <img src={img} className="card--image" alt=""/>
            <div className="card--stats">
                <img/>
                <span>5.0</span>
                <span className="grey">(6)</span>
                <span className="grey">usa</span>
            </div>
            <p> Life lessons with Madicke Cisse</p>
            <p><span className="bold">From $136</span> / person</p>

        </div>
    )
}
    
export default Card;                    