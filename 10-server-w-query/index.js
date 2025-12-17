const express = require("express");
const app = express();
//uses query 


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



app.listen(5500);