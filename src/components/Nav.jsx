import React from "react"
import { NavLink } from "react-router-dom";
import './css/nav.css'


export default function Nav(props) {
        return (
            <nav className="nav">
                <div className="logo">
                    <a href="#">
                        <span>{props.logo}</span>
                    </a>
                </div>
                <ul>
                    <li>
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="about" className="nav-link">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact" className="nav-link">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard/details" className="nav-link">Dashboard</NavLink>
                    </li>
                </ul>
            </nav>
        )
}
