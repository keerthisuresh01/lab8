var http = require('http');
var dt = require('./second');
var url = require("url");
var querystring=require("querystring");
http.createServer(function(req,res){
    var query =url.parse(req.url).query;
    var dis=querystring.parse(query)["display"];
    res.writeHead(200,{'content-Type' : 'text/html'});
    res.write("<body>");
    res.write("<center><h1>Result : "+dt.func(dis)+"</h1></center>");
    res.write("</body>");
    res.end();
}).listen(7220);