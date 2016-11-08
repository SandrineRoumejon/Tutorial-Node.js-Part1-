var fs = require('fs');
var buf = new Buffer(1024);

console.log('going to open existing file');
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log('File opened succesfully!');
    console.log('Going to read the file');
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }

        fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
            console.log('File Closed succesfully.');
        });
    });
});