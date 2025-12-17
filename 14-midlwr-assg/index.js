//Create a middleware function that logs each incoming request’s HTTP method
// URL, and timestamp to the console

const express = require("express");
const app = express();


app.use( (req, res , next)=>{
    console.log("method is : " , req.method);
    console.log("url is : " , req.hostname );
    console.log( new Date().toLocaleString());
    next();
})


app.get("/sum" , ( req , res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans : a + b
    })

})

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});



app.get("/divide" , ( req , res)=>{
    const a = parseInt(req.query.a) ; 
    const b = parseInt(req.query.b);

    res.json({
        ans : a/b
    })

})

app.get("/subtract" , ( req , res)=>{

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans : a - b
    })

})


app.listen(5501);