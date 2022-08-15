import React from "react";
import "../styles/skillSection.css"
import CardCase from "./Cardsection";


const Skillsection = () =>{

return (

    <section className="skillSection">
        <CardCase cardName="Full Stack Development" description="For me, it's important to know all sides of the web development process. I'll learn whatever technology that is needed for me to build applications." image="fa-solid fa-code"/>
        <CardCase cardName="Design Focused" description="I like making websites and applications that look pretty. I know that good design is just as important as good development. I work with Photoshop." image="fa-solid fa-paintbrush"/>
       
    </section>
)

}

export default Skillsection