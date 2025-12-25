//write a function that takes in a username , password and returns a jwt token with the username encioded. 
//should return null if username is not valid email or if the password is not 6 characters 
//(validation with zod)

const jwt = require("jsonwebtoken")
const jwtPassword = "abcilovetech"
const zod = require("zod");

const emailSchema = zod.email();
const passwordSchema = zod.string().min(6);


function signJWT(username , password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse || !passwordResponse){
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtPassword)
    return signature;
}

//function that returns true if jwt can be decoded
function decodeJWT(token){
    try {
        const decoded = jwt.decode(token);
        return true;
    } catch (error) {
        return false;
    }
}


//if verified, return true
function verifyJWT(token , jwtPassword){
    try{
        const verified = jwt.verify(token , jwtPassword);
        return true;
    }catch(e){
        return false;
    }
}

//same thing with try catch block