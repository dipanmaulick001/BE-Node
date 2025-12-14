const express = require("express");
const app = express();

//route handlers 
app.get("/", (req , res)=>{
    res.send("Hello world")
})

app.post("/" , (req, res)=>{
    res.send("hello from post request")
})

app.listen(3000);