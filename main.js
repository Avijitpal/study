// //sqaure
// //cube
// // Callback is passing an argumrnt as a patameter.

// function cube(n){
//     const val = n*n*n;
//     return val;
//  }


//  function sqaure(n){
//     const val = n*n;
//     return val;
//  }
// function cal(a, b , callback){
//     console.log( callback)
//     const value1 = callback(a)
//     const value2 = callback(b);
//     return value1
// }

// const ans = cal(2,3,sqaure)
// console.log(ans)
// console.log("Avijit")

// //-------------------------------------

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



//------------------------------------------

function square(a){
 a = a*a;
 return a;
}

function cube(b){
 b = b * b * b;
 return b;
}

function quads(){

}

function sumofSomething(a,b,callback){
    let square = callback(b);
    return square;
}


let ans = sumofSomething(18,2,cube);
console.log(ans);

// This is a normal example 


