const express = require('express');
const uppercaseRouter=require('./routers/uppercase');
const router=express.Router();

router.get('/', function(req, res){
res.send('이 라우터 path로 온 테스트는 모두 대문자로 응답합니다.');

})

router.use('/:text', function(req, res){
    res.send(req.params.text.toUpperCase);

});

module.exports=router;
