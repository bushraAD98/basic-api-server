'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const clothesRoutes = require('./routes/ clothes.js');
const foodRoutes = require('./routes/ food.js');



app.use(express.json());
app.use(cors());
app.use(clothesRoutes);
app.use(foodRoutes);



function start(PORT){
    app.listen( PORT,()=>{
console.log(`listen to port ${PORT}`);
    })
}


module.exports = {
    app : app ,
    start : start
    }