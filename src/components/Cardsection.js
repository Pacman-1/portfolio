import React from "react";
import "../styles/cardSection.css";



const CardCase =(props) =>{
return (
   <section className="cards">
      <div className="image"><i class="fa-solid fa-code"></i></div>
        <div className="cardName">{props.cardName}</div>
        <div className="cardDescription">{props.description}</div>
   </section>
)
}

export default CardCase