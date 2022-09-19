import React from "react"
import starIcon from "./images/star-icon.png"
//import profileImage from "../images/card-profile.png"
export default function Card(props)
{
     
    return(
        <div className="card">
            <img className="card--image" src={`/images/${props.image}`} alt="card-profile"/>
            <div className="card--description">
                <div className="card--info">
                    <img className="staricon" src={starIcon} alt="star icon"/>
                    <img src={`/images/${props.image}`}/>
                    <p className="gray">({props.rating}) • </p>
                    <p className="gray">{props.location}</p>
                </div>
                <div className="card--info">
                    {props.title}
                </div>
                <div className="card--info">
                <span className="card--bold">From ${props.price} </span>/ person
                </div>
            </div>
        </div>
    )
}
