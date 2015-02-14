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

