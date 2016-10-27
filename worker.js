function open(port)
{
			var ws = new WebSocket("ws://10.11.110.98:"+ port +"/echo");
            
           ws.onopen = function()
           {
               console.log("OPEN");
           };
            
           ws.onmessage = function(evt) 
           { 
			   ws.send("PING");
               //console.log("DATA");
           };
            
           ws.onclose = function()
           { 
               console.log("CLOSED");
           };
}

onmessage = function(e)
{
	if(e.data.port)
	{
		open(e.data.port);
		console.log("Worker spawned with port: ", e.data.port);
	}
	else
	{
		console.error("error");
	}
}
