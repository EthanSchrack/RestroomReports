import React from "react";
import './Hdr.css'
import { NavLink } from "react-router-dom";
 

const Hdr = () => {
    return (    
        <nav className="navbar">
            <div className="hdr">
                <h2 className="hdrwords">Restroom Reports</h2>
            </div>
            <div className="nav-elements"> 
                <ul>
                    <li>
                        <NavLink to="/">Toilets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore">Explore</NavLink>
                    </li>
                </ul>

                
            </div>
        </nav>
    );
}

export default Hdr;