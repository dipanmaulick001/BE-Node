const express = require("express");
const app = express();
app.use(express.json())

//middleware 
function isOldEnoughMiddleware( req , res , next){
    const age = req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg : "sorry you are not of age yet"
        })
    }

}

//app.use(isOldEnoughMiddleware) //optional : put it here , all routes below get it

//route handlers or rides 
app.get("/ride1" ,isOldEnoughMiddleware, (req , res)=>{ //open ride if no middlewares
        res.json({
            msg : "you have successfully ridden ride 1"
        })
})

app.get("/ride2" ,isOldEnoughMiddleware, (req , res)=>{ //open ride if no middlewares
        res.json({
            msg : "you have successfully ridden ride 2"
        })
})



app.listen(5000);