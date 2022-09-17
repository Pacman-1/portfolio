import React from "react";
import imagePhoto from "../images/blackjack.jpg"
import "../styles/projects.css"


const Projectsection = ()=>{
return (
    <div className="project-section">
        
        <div className="title-container">

            {/* Put the span into the div. Aparently spans dont accept margin but divs do*/}
            <div className="span">
            <span></span>
            </div>
    
        <h1 className="project-title">Projects</h1>
        </div>


        <div className="project-display">

            <div className="card-case">
            <img src={imagePhoto} alt=""  className="card-image"/>

            <div className="project-card">
                <h1>Cosmos</h1>
                <p>Used ninja's planet API which supports 7000+ planets. Type in any planet to display the available information.</p>
                <p>HTML, CSS, Javascript and React</p>

                <div className="buttons">
                <button className="front-btn">Front End</button>
                <button className="back-btn">Back End</button>
                
                </div>
            </div>
            </div>



            <div className="card-case">
            <img src={imagePhoto} alt=""  className="card-image"/>

            <div className="project-card">
                <h1>Project Name</h1>
                <p>Description</p>
                <p>Technologies used</p>

                <div className="buttons">
                <button className="front-btn">Front End</button>
                <button className="back-btn">Back End</button>
                
                </div>
            </div>
            </div>







            </div>



    
                
    </div>
)
}

export default Projectsection