/* ************************
? Expressions
***************************/

function hi() {
    (1)   (2)  (3)
    console.log('Hi!');
}

//      vs.

let hi = function hi() {
    console.log('HI!');
}

//The variable 'hey' is now representative of the function 'hi()'

/*
Difference between declaration and expression:
declaration gets hoisted
expression does not
*/

// ANONYMOUS FUNCTION

let hi = function () {
    console.log('HEY!');
}