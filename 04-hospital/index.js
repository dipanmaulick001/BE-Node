const express = require("express");

const app = express();

app.use(express.json()); //so that body undefined na rahe


const users = [{
    name : "Sanjay" ,
    kidneys : [{
        healthy : false
    }]
}]  

app.get("/" , (req , res)=>{
    //check how many kidneys and how many of them are healthy
    const sanjayKidneys = users[0].kidneys;
    const noOfKidneys = sanjayKidneys.length;
    let noOfHealthyKidneys = 0;
    for ( let i =0 ; i< sanjayKidneys.length ; i++){
        if (sanjayKidneys[i].healthy){
            noOfHealthyKidneys++;
        }
    }
    const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
    
})

app.post("/" , ( req , res)=>{
    //user can add a kidney
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done"
    })

})

app.put("/" , ( req , res)=>{
    
})

app.delete("/" , ( req , res)=>{
    
})

app.listen(3002);
