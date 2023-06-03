import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(props){

    console.log(props.state);
    return(
        

        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand">
            <Link to="/home" state={props.state} >
                    <img src="./logo.png" style={{height:'30px'}}></img>
            </Link></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page">
                    <Link to="/academics" style={{textDecoration:'none'}} state={props.state}>Academics</Link>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link"><Link to="/clubs" style={{textDecoration:'none'}} state={props.state}>Clubs and Chapters</Link></a>
                </li>
                <li class="nav-item">
                <a class="nav-link"><Link to="/clubs" style={{textDecoration:'none'}} state={props.state}>Connect</Link></a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav;