process.on('exit', function(code){

    setTimeout(function(){
        console.log("This will not run");
    }, 0);

    console.log('About to exit with code.' , code);

});

console.log("Program Ended");