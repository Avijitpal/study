const { error } = require("console");

const isPhoneStore = true;
const isPhoneAvailable = true;

function processMessage(){
     return new Promise((resolve, reject)=>{
        if(!isPhoneStore){
           reject({
            name:'wrong store',
            message:'Sorry , this is a food store',
           })
        } 
        else if(!isPhoneAvailable){
             reject({
                name:'wrong store',
                 message:'Sorry , this is a food store',
             })
        }
        else{
            resolve({
                name: 'Ok',
                message: 'The iphone16 is available'
            })
        }
    })
}

//console.log(p)
processMessage().then(Response => console.log(Response))
                .catch(error=>console.log(error));