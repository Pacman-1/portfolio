import React from "react";
import imagePhoto2 from "../images/cosmos.png"
import imagePhoto3 from "../images/cops.png"
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
            <img src={imagePhoto2} alt=""  className="card-image"/>

            <div className="project-card">
                <h1>Cosmos</h1>
                <p>Used ninja's planet API which supports 7000+ planets. Type in any planet to display the available information.</p>
                <p> Technolgoies Used: HTML, CSS, Javascript and React</p>

                <div className="buttons">
                <a href="https://pacman1-cosmos.netlify.app/ " target={"__blank"}><button className="front-btn">Front End</button></a>
                <a href="https://github.com/Pacman-1/cosmos" target={"__blank"}><button className="back-btn">Back End</button></a>
                
                </div>
            </div>
            </div>



            <div className="card-case">
            <img src={imagePhoto3} alt=""  className="card-image"/>

            <div className="project-card">
                <h1>Cops and Robbers</h1>
                <p>A simple TicTac-Toe game with a cops and robbers theme. Created this project to help with my Javascipt skills</p>
                <p>Technolgoies Used: HTML, CSS and Javascript </p>

                <div className="buttons">
              <a href="https://pacman-1.github.io/Cops-and-Robbers/" target={"__blank"}><button className="front-btn">Front End</button></a>
              <a href="https://github.com/Pacman-1/Cops-and-Robbers" target={"__blank"}> <button className="back-btn">Back End</button></a>
                
                </div>
            </div>
            
            </div>

            <div className="card-case">
            <img src={imagePhoto3} alt=""  className="card-image"/>

            <div className="project-card">
                <h1>Circuit</h1>
                <p>Ecommerce website for a candy shop</p>
                <p>Technolgoies Used: HTML, CSS, React and Javascript </p>

                <div className="buttons">
              <a  target={"__blank"}><button className="front-btn">Front End</button></a>
              <a target={"__blank"}> <button className="back-btn">Back End</button></a>
                
                </div>
            </div>
            
            </div>



            </div>



                
    </div>
)
}

export default Projectsection