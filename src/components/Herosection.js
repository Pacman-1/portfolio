import React from "react";
import "../styles/heroSection.css"
import imagePhoto from "../images/image1.png"



const Herosection = ()=>{


    return (
        
        
        <section >
            
            <div className="about-me">
                <h3>Hi, My name is</h3>
                <h1 className="name">Roland Cook</h1>
                <h3>I build projects that help people</h3>

                <div className="socials">

                <a href="https://google.com" target={"__blank"}> <button type="button" class="btn btn-primary btn-lg">Resume</button> </a>

              <a href="https://github.com/Pacman-1" target={"__blank"}> <i class="fa-brands fa-github fa-2xl"></i></a> 
              
               <a href="https://www.linkedin.com/in/roland-cook-455870247/" target={"__blank"}> <i class="fa-brands fa-linkedin fa-2xl"></i></a>
            
                </div>

            </div>
            <div>
            <img src={imagePhoto} alt="Logo" />
            </div>
        </section>
    )
}

export default Herosection