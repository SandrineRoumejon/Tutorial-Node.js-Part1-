var fs = require('fs');

console.log('Going to delete directory /tmp/test');
fs.rmdir('/tmp/test', function(err){
    if(err){
        return console.error(err);
    }
    console.log('Going to read directory /tmp');
    fs.readdir('/tmp/', function(err, file){
        if (err) {
            return console.error(err);
        }
        file.forEach( function (file){
            console.log( file );
        });
    });
});