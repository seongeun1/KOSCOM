const http = require('http');
const fs = require('fs');
const { traceDeprecation } = require('process');

const server = http.createServer(
    (req, res) =>{
        fs.readFile(
            __dirname + '/../build/index.html',
            function(err, data){
                if(err){
                    console.log(err);
                    return;
                }
                console.log('data: ', data);
                res.statusCode=200;
                res.setHeader('Content-Type','text/html; charset=utf-8');
                res.end();
            }
        )
    }
)

server.listen(8000);