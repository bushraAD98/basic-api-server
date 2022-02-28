'use strict';
const express = require ('express');
const {clothes} = require('../models/ index');
const routers = express.Router();


routers.get('/clothes',getAllclothes);
routers.post('/clothes',addNewClothes)
routers.get('/clothes/:id',getSingleClothes)
routers.delete('/clothes/:id',removeClothes)
routers.put('/clothes/:id',updateClothes)




async function getAllclothes(req,res){
    let clothesCollection = await clothes.findAll();
    res.status(200).json(clothesCollection);
}

async function addNewClothes(req,res) {
  let sentClothes = req.body;
  let newClothes = await clothes.create(sentClothes);
  res.status(201).json(newClothes);
}
async function getSingleClothes(req,res){
    let customerId = parseInt(req.params.id);
    let theClothes = await clothes.findOne({where:{id:customerId}});
    res.status(200).json(theClothes);
}

async function removeClothes(req,res){
    let removedID = parseInt(req.params.id);
    let removedClothes = await clothes.destroy({where:{id:removedID}});
    res.status(204).json(removedClothes);
}

async function updateClothes(req,res){
 let body =req.body;
 let id = req.params.id;  
 let sentClothes = await clothes.findOne({where:{id:id}});
    const updateClothes = await sentClothes.update(body);
    res.status(201).json(updateClothes);
}




module.exports = routers ;