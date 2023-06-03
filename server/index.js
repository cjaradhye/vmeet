const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/hackathon');


const studentSchema = new mongoose.Schema({
    name: String,
    password: String,
    data: {
            classes: Array,
            clubs: Array
    },
    notifications: Array
})

const facultySchema = new mongoose.Schema({
    name: String,
    password: String,
    data: {
            classes: Array,
            messages: Array
    }
})

const User = mongoose.model('student', studentSchema);
const Admin = mongoose.model('faculty', facultySchema);

const teach = {
    name: 'samplefaculty@vit.ac.in',
    password: '12345',
    data: {
        classes: [],
        messages: []
    }
}



app.route("/")
    .get(async (req,res) => {
        // Viewing the database
        const items = await User.find();
        res.send(items);
    })

app.route("/sendmessage")
    .post(async (req,res) => {
    
    const facultyName = req.body.name;
    const message = req.body.message;
    const obj = {name: facultyName, message: message, response: "None"}
    let name;
    let finalData;
    const data = await User.find();
    console.log(obj);
    
    let p1 = new Promise((resolve,reject)=>{
        console.log("reached here");
        for(let i = 0; i < data.length; i++){
            const classes = data[i].data.classes
            for (let j = 0; j<classes.length; j++){
                const tempName = classes[j][5];
                console.log(tempName);
                if(tempName===facultyName){
                    console.log("This is the final name" + facultyName);
                    data[i].notifications.append(obj)
                    name = data[i].name;
                    finalData = data[i].notifications;
                    resolve(finalData);
                }
            }
        }
    })
    
    p1.then((final)=>{
        User.findOneAndUpdate({name: name},{$set:{notifications: final}}).then((value)=>{
            console.log(final)
        });
    })
    
    

    })

app.listen(3100,()=>{
    console.log("Server is up and running on port 3100..");
})

