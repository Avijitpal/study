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



function myOwnSetTimeout(callback, duration){
    setTimeout(callback,duration);

}

//Under code uses the callback

// myOwnSetTimeout(function(){
//     console.log("Hello how are you")
// },2000) 

// The under one uses  

// setTimeout(function(){
//     console.log("Hello how are you ")
// },  3000 ) 



function promisifideMyOwnTimeOut(duration){
    const p = new Promise(function(resolve){
         setTimeout(function(){
            resolve();
         },duration)
         console.log(resolve)

    })
    return p;
}

const ans =  promisifideMyOwnTimeOut(1000)
ans.then(function(){
    console.log("It is done")
})