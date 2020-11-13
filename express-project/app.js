const express = require('express');
//const cors=require('cors');

const app=express();
app.use(function(req, res, next){
    console.log('미들웨어 1호출');
    next();
});

app.get('/', function(req, res){
    res.send('hello world');
});
app.use(function(req, res, next){
    console.log('미들웨어 2호출');
});

app.listen(8000, function(){
    console.log('app listening to port 8000');
});