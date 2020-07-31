const express = require('express');
const app = express();

const robots = require('./routes/robots');

app.use('/api',robots)


app.listen(3000,function(){
    console.log('ready');
})
