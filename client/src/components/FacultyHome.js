import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function FacultyHome(){

    const navigate = useNavigate();

    function handleSubmit(e){
        console.log("Yahaan pahuch gaye")
        const message = e.target.message.value;
        const name = "Sample Faculty";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "message": message,
            })
        };
        navigate("/stulogin");
        try{
            fetch('http://localhost:8080/127.0.0.1:3100/sendmessage', options).then((res)=>{
                console.log(res);
                if (res.status === 200) {
                    console.log(res.status);
                    console.log("Expense added successfully");
                } else {
                    console.log("Some error occured");
                }
            })
        } catch (err) {
            console.log(err);
        }

    }

    return(
        <form onSubmit={handleSubmit}>
        <div class = "card" style={{width:"30rem", margin:"auto", marginTop:"15rem"}}>
            
            <input type="text" name="message" style={{margin:"2rem"}}/>
            <Button type="submit">Send Message</Button>
            
        </div>
        </form>
    )
}

export default FacultyHome;