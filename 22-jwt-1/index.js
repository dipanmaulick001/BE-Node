//write a function that takes in a username , password and returns a jwt token with the username encioded. 
//should return null if username is not valid email or if the password is not 6 characters 
//(validation with zod)

const jwt = require("jsonwebtoken")
const jwtPassword = "abcilovetech"
const zod = require("zod");

const emailSchema = zod.email();
const passwordSchema = zod.string().min(6);


function signJWT(username , password){
    const signature = jwt.sign({
        username
    }, jwtPassword)
    return signature;
}