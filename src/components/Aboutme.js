import React from "react";
import "../styles/aboutMe.css" 
import imagePhoto from "../images/image1.png"

const Aboutme = ()=>{
return(
    <section className="section-container" id="about-link">
        <div className="about-me-section">
            <span></span>
            <h1 className="about-me-text">About Me</h1>

            <p>Hi, my name is Roland Cook, a Front End Developer from Concord, NC. I love building websites that solve life's unique problems.</p>
            <p>I primarily work with CSS, HTML , Javascript and React. I have build a number of websites and applications using these skills. I also enjoy working in Photoshop</p>
        </div>
        
        
        <img src={imagePhoto} alt="Logo" />
    </section>
    
)
}
// shrink image to correct font responsiveness issues 
export default Aboutme