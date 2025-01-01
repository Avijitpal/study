function findsum(n){
    let ans = 0
    for(let  i = 0;i<n;i++){
        ans += i;
    }
    console.log(ans);
}

function wait(){
    return findsum(100);

}
setTimeout(wait, 3000);
console.log("Please wait")