/* ******************************
PARAMETERS
********************************/

function hi(name) {
            //(1)
    console.log(`Hi ${name}!`)
                    //(2)
}

hi('Danielle');
hi('Zach')
    //(3)

// 1 - The parameter(s) we need to take into the function
// 2 - Using string interpolation, we can refer to the parameter we passed
// 3 - This is where we define wha the parameter's value will be

function pet(animal) {
    console.log(`My puppy's name is ${animal}!`)
}

pet('Mo');
pet('Georgie');
pet('Nugget');

/*
Challenge:
Write a function that thakes two parameters:
One paramter is for a first name,
The other parameter is for a last name;
Have them come together in a variable inside the function.
console.log 'Hello, my name is <YOUR NAME>'
Call your function
*/

function name(fName, lName) {
    let wName = fName + ' ' + lName;
    console.log(`Hello, my name is ${wName}`)
}

name('Wes', 'Gustin')