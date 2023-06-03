import React from "react";

function Event(props){
    return(
        <div class = "event">
        
        <h5 class="card-subtitle mb-2 text-body-secondary">{props.subtitle}</h5>
        <p class="card-text">{props.text}</p>
        </div>
    )
}


function Card(props){
    return (
    <div class="col-6">
    <div class="card container text-centre" style={{width: "90%"}}>
    <div class="card-body">
        <h4 class="card-title">{props.title}</h4>
        <br />
        <Event 
            subtitle = "Seedballs 3.0"
            text = "9th June | 9AM - 4PM"
        />
        <Event 
            subtitle = "Automate.py"
            text = "10th June | 9AM - 4PM"
        />
        <Event 
            subtitle = "Hack-A-Thon"
            text = "12th June | 9AM - 4PM"
        />
    </div>
    </div>
</div>)
}


export default Card;