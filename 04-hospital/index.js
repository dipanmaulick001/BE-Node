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
    if(isThereAtLeastOneUnhealthy){
        //make all kidneys healthy
        for ( let i = 0 ; i< users[0].kidneys.length ; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({}); //we dont need a response but still we do it or else the put req keeps hanging

    }else{
        res.sendStatus(411).json({
            msg : "no bad kidneys"
        })
    }   
})

app.delete("/" , ( req , res)=>{
    //add en edge case when all are healthy kidneys - nothing to remove
    //if atleast one unhealthy kidney: do this
    if (isThereAtLeastOneUnhealthy){
        const newKidneys = [];
        for ( let i = 0 ; i< users[0].kidneys.length ; i++){
            if (users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        users[0].kidneys = newKidneys; //throw away old one
        res.json({ msg : "done"})

    }else{
        res.sendStatus(411).json({
            msg : "You have no bad kidneys"
        })
    }
})

function isThereAtLeastOneUnhealthy(){
    let atleastOneUnhealthyKidney = false;
    for ( let i = 0 ; i<users[0].kidneys.length ; i++){
        if (!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3002);
