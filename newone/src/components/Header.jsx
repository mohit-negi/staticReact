import React from "react"
import reactlogo from "../assets/react.svg"
//import Reactlogo from "./assets/React-icon.png"
export default function Header()
{
    return(
        <header>
                <navbar className="nav">
                <div className="nav-logo-section">
                    <h2>ReactInfo</h2>
                    <img className="logo" src={reactlogo} alt="logo for react"/>
                </div>
                <div className="nav-pane-section">
                    <h4>Learn more about react</h4>
                </div>
            </navbar>
        </header>
    )
};