var http = require('http');
var fs = require('fs');
var content = "<html><head><title>dotrinh.com</title></head><body> <h1 >Hello from dotrinh<h1> </body></html>";
fs.writeFile('write_file.html', content, 'utf8', function (err) {
    if (err)
        throw err;
    else
        console.log('thanh cong! hay xem tren browser: http://localhost:8000 .....');
});

// --------------------showing content
http.createServer(function (req, res) {
    res.writeHead('200', {'content-type': 'text/html'});
    fs.readFile('write_file.html', 'utf8', function (err, data) {
        if (err) throw err;
        res.write(data);
        res.end();
    });

}).listen(8000);