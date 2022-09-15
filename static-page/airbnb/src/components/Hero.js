import React from "react"
import Image from "../images/hero-grid-image.jpeg"

export default function Hero()
{
    return(
        <section className="hero">
            <img className="hero--image" src={Image} alt="hero-grid-image"/>
            <h1 className="hero--heading">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}