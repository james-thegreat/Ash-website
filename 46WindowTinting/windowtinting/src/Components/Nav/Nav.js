import React from "react";
import { NavLink } from "react-router-dom";
import "Nav.css";

function Nav () {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/services">
                        Services
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}