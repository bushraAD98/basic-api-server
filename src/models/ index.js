'use strict';
const {Sequelize,DataTypes} = require('sequelize');
require('dotenv').config();
const food = require('./ food.js');
const clothes = require('./ clothes');



const POSTGRES_URL = process.env.DATABASE_URL || "postgresql://bushra:0000@localhost:5432/class03" ;
let sequelizeOptions =  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  };

  let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);


  module.exports = {
    db: sequelize, //to make a real db connection in the main index.js
    food: food(sequelize,DataTypes), // to make the table & to use it in the routes
    clothes: clothes(sequelize,DataTypes)
}
