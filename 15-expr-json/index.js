const express = require("express");
const app = express();

//middleware
app.use(express.json()); //parses the json


app.post("/sum" , ( req , res)=>{
    const a = parseInt(req.body.a); //we have to send a, b through body- cant be sent
     //through browser, so we need to use postman( also post request)
    const b = parseInt(req.body.b);
    //also, cannot read the request since we send body in json, so we need to parse it
    //before sending to the server
    res.json({
        ans : a + b
    })

})


app.listen(5502);