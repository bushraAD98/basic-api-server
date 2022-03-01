'use strict'; 


const validator  = (req,res,next) =>{
let name = req.query.name;
if(!name){
    next('please type a name.');
}
else{
  next(); 
}

}

module.exports = validator;