//sqaure
//cube
// Callback is passing an argumrnt as a patameter.

function cube(n){
    const val = n*n*n;
    return val;
 }


 function sqaure(n){
    const val = n*n;
    return val;
 }
function cal(a, b , callback){
    console.log( callback)
    const value1 = callback(a)
    const value2 = callback(b);
    return value1
}

const ans = cal(2,3,sqaure)
console.log(ans)



