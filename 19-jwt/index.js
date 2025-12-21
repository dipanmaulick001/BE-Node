const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "JWTSECRET";

const users = []; //use it as a database ,store here after user signs up

app.use(express.json());


app.post("/signup" , function(req , res){
    //later we add input validation with zod
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
    })

    //later on, add logic like if account exists, cant make another acc

    res.json({
        msg : "You have created an account ! Congrats"
    })

    console.log(users);

})

app.post("/signin" , (req , res)=>{
    //when signin hit, token given and stored in users
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u){
            if (u.username == username && u.password==password){
                return true;
            }else{
                return false;
            }
    })

    if(!user){
            res.json({
                msg : "credentials dont match"
            })
    }

    const token = jwt.sign({
        username : username
    },JWT_SECRET)
    //user.token = token;

    res.json({
        token : token
    })

    console.log(users);

})

//authenticated endpoint 

app.get("/me" , function(req , res){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token , JWT_SECRET);
    const username = decodedInfo.username;

    const user = users.find(function(u){
        if (u.username == username){
            return true;
        }else{
            return false
        }
    })
    //give back the username and password as well
    if(user){
        res.json({
            username : user.username,
            password : user.password
        })
    }else{
        res.json({
            message : "invalid token"
        })
    }
})

app.listen(3003);