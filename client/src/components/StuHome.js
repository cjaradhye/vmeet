import React from "react";
import Nav from "./Nav";
import Row from "./Row";
import ToastComponent from "./Toast";

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
        <Row 
            h1 = "Nature Lovers' Club"
            sub1 = "Time: 9:00 AM to 5:00PM"
            src1 = "./pic1.png"
            h2 = "Innovators Quest"
            sub2 = "Time: 7:00 PM"
            src2 = "./pic2.png"
        />
    </div>)
}

export default StuHome;