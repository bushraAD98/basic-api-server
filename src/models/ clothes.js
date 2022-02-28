'use strict';

const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING
  
    }
})

module.exports = clothes;