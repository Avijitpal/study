function doSomthing(callback){
    console.log("it is executing")
  setTimeout(()=>{
   callback()
  },3000)
}


function sayHello(){
    console.log("Hello Brother")
}

doSomthing(sayHello);