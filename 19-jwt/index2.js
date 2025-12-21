const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const SECRET = "SECRET"

let users = [];

app.use(express.json());

app.post("/signup" , (req , res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
    })

    res.json({
        message : "YOu have signed up"
    })

})

app.post("/signin" , (req , res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let user = users.find( (u)=>{
        if (u.username === username && u.password === password){
            return true;
        }else{
            return false;
        }
    })

    if (user){
        const token = jwt.sign({
            username
        },SECRET)
        res.json({
            token : token
        })
    }else{
        res.json({
            msg : "Credentials dont match"
        })
    }
    
})
//authenticated endpoint
app.get("/me" , (req , res)=>{
    const token = req.headers.token;
    const decodedToken = jwt.verify(token , SECRET);
    const username = decodedToken.username;
//gives back only the username from the jwt
    res.json({
        username : decodedToken.username
    })
})

app.listen(3003);