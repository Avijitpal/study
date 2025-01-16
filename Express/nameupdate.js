const express = require("express")
const app = express();
app.use(express.json())

const users=[{
    name:"Avijit",
    surname: "Pal",
    isData:false
}]

app.get("/",(req,res)=>{
  const length = users.length;
  res.send(`The length of the array is ${length}`)
  console.log(users)
})

// app.post("/",(req,res)=>{
//   const{name, surname,isData} = req.body;
//   if(name && surname && typeof isData !== undefined){
//   users.push({name, surname, isData});
//   res.send("user added");
//   }
//   else{
//     res.status(400).send("Please provide valid name and surname and isdata ")
//   }
// })


app.post("/",(req,res)=>{
  const  newUsers = req.body;
  if(Array.isArray(newUsers) && newUsers.length >0){
    newUsers.forEach(user =>{
      if(user.name && user.surname && typeof user.isData != 'undefined'){
         users.push(user)
      }
    })
    res.send("user added the data")
  }
  else{
    res.status(400).send("Please provide the valid data")
  }
})

app.listen(3000,()=>{
 console.log("The server is running on port 3000")
})
