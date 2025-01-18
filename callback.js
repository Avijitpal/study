function orderFood(){
     return new Promise((resolve,reject)=>{
        let food = false;
        if(food){
            setTimeout(()=>{
                console.log("Food is Ready");
                resolve()
             },2000)
        }
        else{
           reject("Sorry the resturent is closed")
        }
        
     })
}


function notifyCustomer(){
    console.log("Your food is on the way !!!!")
}
function handleError(error){
    console.log(error)
}


async function ProcessOrder() {
    try{
      await orderFood();
      notifyCustomer()
    }catch(error){
        handleError(error);
    }
}


ProcessOrder();