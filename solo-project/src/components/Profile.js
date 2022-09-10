import React from "react"
import profilepic from "../assets/profile-pic.png";


export default function Profile()
{
    return(
        <div className="profile--container">
            <div className="profile">
            <img className="profile-image" src={profilepic}alt="blurry face"/>
            <div className="profile-section">
                <h2>Laura smith</h2>
                <small>Frontend developer</small>
                <p>laurasmith.website</p>   
                <button>Email</button>
            </div>
            </div>
        </div>
    )
}