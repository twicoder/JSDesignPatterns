var Class = (function(){
    // Constants (created as private static attributes).
    var UPPER_BOUND = 100;
    // Constructor.
    var ctor = function(constructorArgument){
        //...
    };

    // Privileged static method.
    ctor.getUPPER_BOUND = function(){
        return UPPER_BOUND;
    };

    //...

    // Return the constructor
    return ctor;

})();

Class.getUPPER_BOUND();

var Class2 = (function(){

    // Private static attributes.
    var constants = {
        UPPER_BOUND: 100,
        LOWER_BOUND: -100
    };

    // Constructor.
    var ctor = function(constructorArgument){
        //...
    };

    // Privileged static method.
    ctor.getConstant = function(name){
        return constants[name];
    }

    // ...

    // Return the constructor.
    return ctor;
})();

Class2.getConstant('UPPER_BOUND');

