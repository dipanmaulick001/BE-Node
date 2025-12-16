//rate limiteer : 5 requests per second
const express = require("express");
const app = express();

let noOfReqsForUser = {};

setInterval(() => {
    noOfReqsForUser = {}
}, 1000);

app.use( (req , res , next)=>{
    const userId = req.headers["user-id"];
    if(noOfReqsForUser[userId]){
        noOfReqsForUser[userId] = noOfReqsForUser[userId] + 1;
        if(noOfReqsForUser>5){
            res.status(404).send("aaaa");
        }else{
            next();
        }

    }else{
        noOfReqsForUser[userId] = 1;
        next();
    }
})

app.listen(3000);