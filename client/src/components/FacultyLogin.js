import React from "react";
import { useNavigate } from "react-router-dom";

function FacultyLogin(){

    const navigate = useNavigate();

    function checkUser(e){
        var loggedIn = false;
        e.preventDefault();
        const email = e.target.mail.value;
        const password = e.target.password.value;
        async function fetchText() {
            let response = await fetch('http://localhost:8080/127.0.0.1:3100/');
            console.log(response.status); // 200
            console.log(response.statusText); // OK
            if (response.status === 200) {
                let data = await response.text();
                let jsonData = JSON.parse(data);
                

                for (let i = 0; i < jsonData.faculties.length ; i++ ){
                    if(jsonData[i].name===email){
                        if(jsonData[i].password===password){
                            loggedIn = true
                            console.log(jsonData[i]);
                            navigate("/home", {state:jsonData[i]});
                        }else{
                            alert("Wrong password, try again");
                        }
                    }
                }
                if (loggedIn===false){
                    console.log("User does not exist. Redirecting to Sign up Page.");
                    navigate("/");
                }
            }
        }
        fetchText();
    }
    return (
        <div class="d-flex align-items-center py-4 bg-body-tertiary">
        <main class="form-signin w-100 m-auto">
        <form onSubmit={checkUser}>
            <img class="mb-4" src="./logo.png" alt="" width="72" height="57" />
            <h1 class="h3 mb-3 fw-normal">Sign in</h1>

            <div class="form-floating">
            <input type="email" name="mail" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
            <input type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
                Remember me
            </label>
            </div>
            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
        </main>
        <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        </div>
    )
}


export default FacultyLogin;