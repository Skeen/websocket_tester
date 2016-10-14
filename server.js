var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8080 });

var buffer = new Buffer(1024 * 1024);
//var buffer = new Buffer(1);
var con = 0;

wss.on('connection', function connection(ws) 
{
    console.log("CONNECTION", con++);

    ws.on('message', function incoming(message)
    {
        //console.log("MESSAGE", message);
        ws.send(buffer);
    });
    
    ws.send(buffer);
});

console.log("RUNNING");
