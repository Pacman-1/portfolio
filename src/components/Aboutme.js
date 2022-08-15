import React from "react";
import "../styles/aboutMe.css" 
import imagePhoto from "../images/image1.png"

const Aboutme = ()=>{
return(
    <section className="section-container">
        <div className="about-me-section">
            <h1 className="about-me-text">About Me</h1>

            <p>Hi, my name is Roland</p>
            <p>I primarily work with CSS, HTML ,Javascript and React. </p>
        </div>
        <img src={imagePhoto} alt="Logo" />
    </section>
)
}

export default Aboutme