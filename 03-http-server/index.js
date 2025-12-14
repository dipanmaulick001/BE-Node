const express = require("express");
const app = express();

//route handlers 
app.get("/", (req , res)=>{
    res.send("Hello world")
})

app.listen(3000);