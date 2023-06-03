import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "./Footer";



function App() {
    return(
        <div class="main-section d-grid gap-2 col-6 mx-auto">
            <Link to="/stulogin">
            <button class="home-button btn btn-primary" type="button">
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-graduation-cap" />
            Student Login
            </button>
            </Link>
            <Link to="/facultyhome">
            <button class="home-button btn btn-primary" type="button">Faculty Login</button>
            </Link>
            
        </div>
    )
}

export default App;
