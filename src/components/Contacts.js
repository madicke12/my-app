import React from "react"  
//import img1 from "../profil.png";
import '@fortawesome/free-regular-svg-icons'
const Contact=(props)=>{
    console.log(props)
    return(
        <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                <i class="fa-solid fa-phone"></i>
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                <i class="fa-solid fa-envelope"></i>
                    <p>{props.email}</p>
                </div>
        </div>
       
    )
}

export default Contact;
  