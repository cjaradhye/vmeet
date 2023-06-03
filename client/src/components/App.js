import React from "react";
import { Link } from "react-router-dom";


function App() {
    return(
        <div class="main-section d-grid gap-2 col-6 mx-auto">
            <Link to="/stulogin">
            <button class="home-button btn btn-primary" type="button">Student Login</button>
            </Link>
            <Link to="/facultylogin">
            <button class="home-button btn btn-primary" type="button">Faculty Login</button>
            </Link>
        </div>
    )
}

export default App;
