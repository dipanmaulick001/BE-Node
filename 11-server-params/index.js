const express = require("express");
const app = express();
//uses params


app.get("/sum/:a/:b" , ( req , res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans : a + b
    })

})

app.get("/multiply/:a/:b", function(req, res) {
    const a = req.params.a;
    const b = req.params.b;
    res.json({
        ans: a * b
    })
});



app.get("/divide/:a/:b" , ( req , res)=>{
    const a = parseInt(req.params.a) ; 
    const b = parseInt(req.params.b);

    res.json({
        ans : a/b
    })

})

app.get("/subtract/:a/:b" , ( req , res)=>{

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans : a - b
    })

})



app.listen(5500);