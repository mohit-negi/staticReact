import React from "react"
//import Image from "../images/airbnblogo.png"
export default function Header()
{
    return(
        <nav className="navbar">
            <img className="logo" src={require('./images/airbnblogo.png')} alt="airbnb logo"/>
        </nav>
    )
}