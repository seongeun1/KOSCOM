const { RSA_NO_PADDING } = require('constants');
const express=require('express');
const path=require('path');

const app=express();
/*
app.use('/favicon.ico',function(req, res){
    res.sendFile(path.join(__dirname, '../build','favicon.ico'));
});

app.use(function(req, res){
    res.sendFile(path.join(__dirname,'../build', 'index.html'));


});*/

app.use(express.static(
    path.join(__dirname, '../build')
));

app.listen(8000,()=>console.log("서버시작"));