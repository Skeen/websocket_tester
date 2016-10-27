var WebSocketServer = require('ws').Server;
var port = parseInt(process.argv[2]);
var wss = new WebSocketServer({ port: port });

var size = 64 * 1000;
var buffer = new Buffer(size);
//var buffer = new Buffer(1);
var con = 0;

wss.on('connection', function connection(ws) 
{
    console.log("CONNECTION", con++);

    ws.on('message', function incoming(message)
    {
        //console.log(buffer);
        //console.log(size);

        //console.log("MESSAGE", message);
        ws.send(buffer);
    });
    
    ws.send(new Buffer(0));
});

console.log("Running on", port);
