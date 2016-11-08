function printHello(){
    console.log('hello, World!');
}

var t = setTimeout(printHello, 2000);

clearTimeout(t);