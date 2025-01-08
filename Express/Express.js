const express = require("express");

const app = express();

const users =[{
    name: "Avijit",
    kidneys:[{
         healthy: false
    }]
}]
app.get("/",function(req, res){
   const avijitsk = users[0].kidneys;
   const numberOfkidneys = avijitsk.length;
   let numberofHealthyKidney = 0;
   for(let i = 0;i<avijitsk.length;i++){
    if(avijitsk[i].healthy){
        numberofHealthyKidney = numberofHealthyKidney+1;
    }
   }

   const numberofUnhealthyKidney = numberOfkidneys - numberofHealthyKidney;
   res.json({
      numberOfkidneys,
      numberofHealthyKidney,
      numberofUnhealthyKidney
   })
})
app.use(express.json())
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})
app.listen(3000);