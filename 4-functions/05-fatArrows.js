/*********************************
? FAT ARROW FUNCITONS
 ******************************* */

 let hi = () => {
//      (1)  (2)
     console.log('hello')
 }

 hi();

// ->   NOT THE SAME AS =>

// 1- We need to se the fat arrow function to a variable
// 2 - We use the 'fat arrow' to signify its a function

// Block Body
// *****************
let hi = () => {
    console.log('hi')
}

let apples = (x) => {
    console.log(`There are ${x} apples in the basket`);
}
apples(12);

// Concise Body
// *******************
let hi = () => console.log('hi');

let apples = x => console.log(`There are ${x} apples in the basket.`);
apples (10);

// More than one paramter will require parenthesis
// REturn (if one-line fat arrow function) is implied

//LINE BREAKS ARE BAD
let func = () => console.log('hi');     // this works

let func = ()
    => console.log('hi');               //this will not work

    