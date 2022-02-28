

const express = require('express');
// const res = require('express/lib/response');
const app = express();
const cors = require('cors');


function start(PORT){
    app.listen( PORT,()=>{
console.log(`listen to port ${PORT}`);
    })
}


module.exports = {
    app : app ,
    start : start
    }