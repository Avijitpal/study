// const { error } = require("console");

// const isPhoneStore = true;
// const isPhoneAvailable = true;

// function processMessage(){
//      return new Promise((resolve, reject)=>{
//         if(!isPhoneStore){
//            reject({
//             name:'wrong store',
//             message:'Sorry , this is a food store',
//            })
//         } 
//         else if(!isPhoneAvailable){
//              reject({
//                 name:'wrong store',
//                  message:'Sorry , this is a food store',
//              })
//         }
//         else{
//             resolve({
//                 name: 'Ok',
//                 message: 'The iphone16 is available'
//             })
//         }
//     })
// }

// //console.log(p)
// processMessage().then(Response => console.log(Response))
//                 .catch(error=>console.log(error));




//This is a Aysnc Function Created by us
//Now we  have to promisty this



//// What should be the approach



// function myOwnSetTimeout(callback, duration){
//     setTimeout(callback,duration);

// }

//Under code uses the callback

// myOwnSetTimeout(function(){
//     console.log("Hello how are you")
// },2000) 

// The under one uses  

// setTimeout(function(){
//     console.log("Hello how are you ")
// },  3000 ) 


// There is finally and also catch Phrases 
const promise = new Promise((resolve, reject)=>{
    const num = Math.random();
    if(num >= 0.5){
        resolve("Fillfilled");
    }
    else{
        reject("Not Fullfilled")
    }
})
function handleResolve(value){
   console.log(value) // The value is retuned by the resolve.
}

function handleReject(reason){
 console.log(reason)//Here The reason is returned by the reject.
}
 promise.then(handleResolve, handleReject)

 console.log("Avijit")