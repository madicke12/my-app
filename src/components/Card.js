import React  from "react";
//import img from '../profil.png';
const Card =(props)=> {
    console.log(props)
    return(
        <div className="card">
            <img src={props.img} className="card--image" alt=""/>
            <div className="card--stats">
            <i class="fa-solid fa-star"></i>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span className="gray">{props.country}</span>
            </div>
            <p> Life lessons with Madicke Cisse</p>
            <p><span className="bold">From ${props.price}</span> / person</p>

        </div>
    )
}
    
export default Card;                    