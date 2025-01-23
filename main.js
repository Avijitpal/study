//var can be reupadated and redeclared
//let can be reupdated but can not be redeclared
//const can not be (updated or redeclared)
//hoisting

//var is functional scoped
//let is only block scoped


function print(){
    const x = 10;
    if(true){
        x = 20
      const y = 20; 
          y = 40;
      console.log(y)
    }
    console.log(x);
    
}

print()