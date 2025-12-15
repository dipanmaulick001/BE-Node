//Create a middleware to log the no of requests


const express = require("express");
const app = express();

let requestCount = 0;

app.use(  ( req , res , next)=>{ //main block
    requestCount = requestCount + 1;
    next();
})

app.get('/user', (req , res)=>{
    res.status(200).json({username :"john" })
})

app.get("/requestCount" , (req , res)=>{
    res.status(200).json({requestCount})
})



app.listen(3003);