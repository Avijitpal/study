//CALLBACKS
//Callbacks are the way to ensure That a certain piece of code is executed
//Only after Another piece of code has finished

//Below is the callback Example.


// function findsum(n){
//     let ans = 0
//     for(let  i = 0;i<n;i++){
//         ans += i;
//     }
//     console.log(ans);
// }

// function wait(){
//     return findsum(100);

// }
// setTimeout(wait, 3000);
//******PROMISE******/

 const fs = require('fs')

function avijitReadfile(){
    return new Promise(function(resolve){
         fs.readFile("git.txt","utf-8", function(err, data){
            resolve(data)
         })
    })
}

function onDone(data){
    console.log(data)
}
avijitReadfile().then(onDone)