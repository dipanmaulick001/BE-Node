const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "randomiloveyou";
const app = express();

app.use(json.express());
let users = []

//auth middleware ; all the auth logic here
function auth(req, res , next){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token , JWT_SECRET);
    if (decodedInfo.username){
        req.username = decodedInfo.username;
        next()
    }else{
        return res.json({
            message : "Not logged in"
        })
    }
}

//logger middleware
function logger(req , res , next){
    console.log(req.method + "method comes");
    next();
}

app.post("/signup" , function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
    })

    return res.json({
        message : "account created !"
    })

})

app.post("/signin" , function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    let user = users.find( (u)=> u.username === username && u.password === password);
    if (user){
        const token = jwt.sign({
            username
        },JWT_SECRET)
        return res.json({
            token : token
        })
    }else{
        res.status(401).json({msg : "invalid credentials"})
    }
    
})

//authenticated endpoint 
app.get("/me" , auth , function(req, res){
    let user = users.find((u)=> u.username === decodedInfo.username);
    if (user){
        res.json({
            username : user.username,
            password : user.password
        })
    }   
})

app.listen(3004);