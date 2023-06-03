import React from "react";

function Event(props){
    return(
        <div class = "event">
        
        <h5 class="card-subtitle mb-2 text-body-secondary">{props.subtitle}</h5>
        <p class="card-text">{props.text}</p>
        </div>
    )
}


function Card2(props){
    return (
    <div class="col-6">
    <div class="card container text-centre" style={{width: "90%"}}>
    <div class="card-body">
        <h4 class="card-title">{props.title}</h4>
        <br />
        <Event 
            subtitle = "Munna Bhai"
            text = "Class is cancelled for tomorrow."
        />
        <Event 
            subtitle = "Phunsukh Wangdu"
            text = "Lecture on electrical conductivity tomorrow."
        />
    </div>
    </div>
</div>)
}


export default Card2;