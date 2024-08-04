const express = require("express");
const app = express();
var bodyParser = require('body-parser')

const  port = 8321;


// get the request
app.get("/register",(req, res)=>{
    let {user, password}= req.query;
    res.send(`Get accepted in your server welcom @${user} and your password is ${password}`)
});


// post the request

app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

app.post("/register",(req, res)=>{
    let {user , password}= req.body;

    // console.log(req.body);
    res.send("send!!! post");

    
 //res.send(`post is running on your server welcom @${user}`);
    
})

app.listen(port, ()=>{
    console.log(`port is running  on ${port}`);
})