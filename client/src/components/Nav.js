import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(props){

    console.log(props.state);
    return(
        

        <nav class="navbar navbar-expand-lg" data-bs-theme="dark" style={{backgroundColor: "black"}}>
        <div class="container-fluid">
            <p class="navbar-brand">
            <Link to="/home" state={props.state}>
                    <img src="./logo.png" style={{height:'30px'}}></img>
            </Link></p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <form className="d-flex">
            <ul class="navbar-nav">
                <li class="nav-item">
                <p class="nav-link active" aria-current="page">
                    <Link to="/academics" style={{textDecoration:'none', color: "white"}} state={props.state}>Academics</Link>
                </p>
                </li>
                <li class="nav-item">
                <p class="nav-link"><Link to="/clubs" style={{textDecoration:'none', color: "white"}} state={props.state}>Clubs and Chapters</Link></p>
                </li>
                {/* <li class="nav-item">
                <p class="nav-link"><Link to="/clubs" style={{textDecoration:'none'}} state={props.state}>Connect</Link></p>
                </li> */}
                
            </ul>
            </form>
            </div>
        </div>
        </nav>
    )
}

export default Nav;