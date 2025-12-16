const express = require("express");
const app = express();

let errorCount = 0;

app.get("/user" , (req , res)=>{
    let a ;
    let b = a[0];
    res.status(200).json({username: "john"})
})

app.post("/user" , (req , res )=>{
    res.status(200).json({msg : "dummy user created"})
})

app.get("/errorCount" , (req , res)=>{
    res.status(200).json({errorCount});
})


//Error handling middleware : added at the end of the program
app.use( (err , req , res , next)=>{
    errorCount++;
    res.status(404).json({msg : "Error aagaya"});  
})


app.listen(3500);