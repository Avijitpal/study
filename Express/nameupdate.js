const express = require("express")
const app = express();

app.use(express.json());

const users =[{
  name :"Avijit",
  surName: "Pal",
  isData: false
}]


app.get("/",(req,res)=>{
   const length = users.length;
   res.send(`the length of the array is ${length}`);
   console.log(users)
})


app.post("/",(req,res)=>{
     const newUsers = req.body;
    if(Array.isArray(newUsers)&& newUsers.length>0){
         newUsers.forEach(user=>{
            if(user.name && user.surName && typeof user.isData != 'undefined'){
                users.push(user)
            }
         })
         res.send("user added to the data")
    }
    else{
      res.status(400).send("Please privide a valid data")
    }

})


app.listen(3000,()=>{
   console.log("The server is running on port 3000")
})



