//module HTTP
var http = require('http');

//server 8000
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<html>');
    response.write('<head>');
    response.write('<title>dotrinh.com</title>');
    response.write('</head>');
    response.write('<body> <h1 style="text-align: center">Hello from dotrinh<h1> </body>');
    response.write('</html>');
    response.end();
}).listen(8000);