var http = require('http');

http.createServer(function (request, response) {

    // Envoie le HTTP header
    // HTTP status : 200 : OK
    // Content Type: text/plain

    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Envoie la réponse 'Hello World'

    response.end('Hello World\n');
}).listen(8081);

// la console va faire apparaitre le message

console.log('Server running at http://127.0.0.1:8081/');

var fs = require('fs');

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log('program ended');

var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('connection succesful.');

    eventEmitter.emit('dat_received');
};

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){

    console.log('data_received', function() {
        console.log('data received successfully.');

});
});
    eventEmitter.emit('connection');

    console.log('Program Ended.');

