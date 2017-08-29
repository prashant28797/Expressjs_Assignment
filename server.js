var http=require('http');

var server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('prashant');
});

server.listen(8000,'127.0.0.1');
console.log('server loistening to 8000....');