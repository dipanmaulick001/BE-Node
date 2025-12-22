const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";

const users = [];

app.use(express.json());

app.post("/signup" , function(req , res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
    })
    return res.json({
        msg : "You have signed up"
    })
})

app.post("/signin" , function(req , res){
    const username = req.body.username;
    const password = req.body.password;

    let user = users.find( (u) => u.username === username && u.password === password)

    if (user){
        const token = jwt.sign({
            username
        },JWT_SECRET)
        return res.json({
            token : token
        })
    }else{
        res.status(401).json({msg : "Invalid credentials"})
    }
})

//auth middleware 
function auth(req ,res , next){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token , JWT_SECRET);

    if (decodedInfo.username){
        req.username = decodedInfo.username;
        next()
    }else{
        return res.json({
            message : "User not logged in"
        })
    }
}

//what method middleware 

function logger(req, res ,next){
    console.log(req.method + "request came")
    next();
}

app.get("/me" , logger , auth , function(req , res){
    let user = users.find((u)=> u.username === decodedInfo.username);
    if (user){
        res.json({
            username : user.username,
            password : user.password
        })
    }
})

app.listen(3004);