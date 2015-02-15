// Two slashes start single-line comments

var x;  // declaring a variable

x = 3 + y;  // assigning a value to the variable `x`

foo(x, y);  // calling function `foo` with parameters `x` and `y`
obj.bar(3);  // calling method `bar` of object `obj`

// A conditional statement
if (x === 0) {  // Is `x` equal to zero?
    x = 123;
}

// Defining function `baz` with parameters `a` and `b`
function baz(a, b) {
    return a + b;
}

// statements do things while expressions produce values
//if-then-else—either as a statement:
var x;
if (y >= 0) {
    x = y;
} else {
    x = -y;
}
//or as an expression:
var x = y >= 0 ? y : -y;

//two operators for categorizing values: typeof is mainly used for primitive values, while instanceof is used for objects
typeof true
//'boolean'
typeof 'abc'
//'string'

{} instanceof Object
//true
[] instanceof Array
//true

//case statements in javascript compared via === with the parameter
switch (fruit) {
    case 'banana':
        // ...
        break;
    case 'apple':
        // ...
        break;
    default:  // all other cases
        // ...
}

//TWO WAYS TO DEF FUNCTIONS

//function declaration
function add(param1, param2) {
    return param1 + param2;
}

//assign function expression to variable
var add = function (param1, param2) {
    return param1 + param2;
};

//if too many params are given, the extra are ignored by all but "arguments" (returns array with all args given)
//if too few params are given, the missing ones receive value of undefined

//common way to make default param values
function pair(x, y) {
    x = x || 0;  // (1)
    y = y || 0;
    return [ x, y ];
}

//enforcing specific number of params with arguments.length
function pair(x, y) {
    if (arguments.length !== 2) {
        throw new Error('Need exactly 2 arguments');
    }
    ...
}

//example of try/except for handling errors
//try clause surrounds critical code, and the catch clause is executed if an exception is thrown inside the try clause
function getPerson(id) {
    if (id < 0) {
        throw new Error('ID must not be negative: '+id);
    }
    return { id: id }; // normally: retrieved from database
}

function getPersons(ids) {
    var result = [];
    ids.forEach(function (id) {
        try {
            var person = getPerson(id);
            result.push(person);
        } catch (exception) {
            console.log(exception);
        }
    });
    return result;
}

//variable declarations are hoisted but var assignments are not
function foo() {
    console.log(tmp); // undefined
    if (false) {
        var tmp = 3;  // (1)
    }
}

//Internally, the preceding function is executed like this:

function foo() {
    var tmp;  // hoisted declaration
    console.log(tmp);
    if (false) {
        tmp = 3;  // assignment stays put
    }

//A closure is a function plus the connection to the variables of its surrounding scopes.

//immediately invoked function expression for keeping variables from becoming global on accident
(function () {  // open IIFE
    var tmp = ...;  // not a global variable
}());  // close IIFE
}

//example where variable is scoped beyond where you'd like
//result is always 5
var result = [];
for (var i=0; i < 5; i++) {
    result.push(function () { return i });  // (1)
}

// result is current state of i when you ask for it thanks to IIFE
for (var i=0; i < 5; i++) {
    (function () {
        var i2 = i; // copy current i
        result.push(function () { return i2 });
    }());
}
