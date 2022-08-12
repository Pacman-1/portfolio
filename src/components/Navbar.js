import React from "react";
import "../styles/navBar.css" 

const navBar =()=>{

return (

    // after importing bootstrap ul was causing whitespace below
    <nav>
        <div className="navBar">
            <li className="home">Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </div>
    </nav>
    
);

}

export default navBar
