function foo(){
    var a = 10;

    function bar(){
        a *= 2;
        return a;
    }

    return bar;
}

var baz = foo();    // baz is now a reference to function bar.
console.log(baz());
console.log(baz());
console.log(baz());
console.log(baz());

var blat = foo();
console.log(blat());
console.log(blat());

for(var i = 0;i<3;i++){
    console.log(i);
}

console.log(i); // legal

