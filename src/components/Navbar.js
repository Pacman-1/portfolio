import React from "react";
import "../styles/navBar.css" 
import {Link} from "react-scroll"

const navBar =()=>{

return (

    // after importing bootstrap ul was causing whitespace below
    <nav>
        <div className="navBar">
           <Link to="navBar" spy={true} smooth={true} offset={-100} duration={200}> <li className="home" Link={navBar}>Home</li></Link>

            <Link to="about-me-section" spy={true} smooth={true} offset={-160} duration={200}><li>About</li></Link> 
            <Link to="project-section" spy={true} smooth={true} offset={0} duration={200}><li>Projects</li></Link> 
            <Link to="form-container" spy={true} smooth={true} offset={-100} duration={200}><li>Contact</li></Link> 
        </div>
    </nav>
    
);

}

export default navBar
