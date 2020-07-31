const express = require('express');
const api = express.Router();
api.get('/robots',(req,res)=>{
    return res.status(200).send('hola');
})
module.exports = api;