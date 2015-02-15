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

