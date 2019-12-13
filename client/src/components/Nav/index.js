import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Search a Book</a>
            <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/saved">Saved</a>
                </li>                
                </ul>
            </div>
        </nav>
    )
}

export default Nav;