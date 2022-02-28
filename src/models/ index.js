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
    db: sequelize, 
    food: food(sequelize,DataTypes),
    clothes: clothes(sequelize,DataTypes)
}
