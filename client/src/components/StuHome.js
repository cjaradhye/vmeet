import React from "react";
import Nav from "./Nav";
import Row from "./Row";
import ToastComponent from "./Toast";
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./Footer";

import { useLocation } from "react-router-dom";

function StuHome() {
    const location = useLocation();
    const data = location.state;
    const notifications = data.notifications;
    
    function handleNotify(single){
        if(single.response=="None"){
            return(<ToastComponent 
            name = {single.name}
            message = {single.message}
            />)
        }
    }
    
    return (
    <div>
        <Nav 
            state={data}
        />
        {notifications.map(handleNotify)}
        <Row />
        <div class="second-section">
        <br/>
        
        <div class="row">
            <Card 
                title = "Upcoming Events"
            />
            <Card2
                title = "Updates"
            />
        </div>
        </div>
        <Footer />
    </div>)
}

export default StuHome;