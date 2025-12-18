const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5123"
}));


app.use(express.json()); 




app.post("/sum" , ( req , res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans : a + b
    })

})


app.listen(3000);