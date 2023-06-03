import React from "react";
import Nav from "./Nav";
import ListItem from "./ListItem";
import { useLocation } from "react-router-dom";

function Clubs(){

    const location = useLocation();
    const userData = location.state;

    console.log(userData);

    function handleList(single){
        return(
        <ListItem 
            heading = {single}
            text = ' '
        />)
    }

    const clubsdb = ["Indian Society for Technical Education", "Entrepreneurship Cell", "Apple Developers Group", "Music Club", "Trekking Club"]
    
    return(
        <div>
            <Nav 
                state = {userData}
            />
            <main class="main-section d-flex flex-nowrap">

            <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style={{width: "380px;"}}>
            <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
            <span class="fs-5 fw-semibold">List group</span>
            </a>
            <div class="list-group list-group-flush border-bottom scrollarea">
            {userData.data.clubs.map(handleList)}
            </div>
        </div>
            
        </main>
        </div>
    )
}


export default Clubs;