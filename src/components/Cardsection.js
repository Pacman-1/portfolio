import React from "react";
import "../styles/cardSection.css";



const CardCase =(props) =>{
return (
   <section className="cards">
      <div className="image"><i class={props.image}></i></div>
        <div className="cardName">{props.cardName}</div>
        <div className="cardDescription">{props.description}</div>
   </section>
)
}

export default CardCase