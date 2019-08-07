/* ************
RETURN
************* */

let hi = () => {
    return 'hi';
    //(1)
};

let newName = hi()
    //(2)      (3)

    console.log(newName);

// 1 - The keyword that brings our data out of our function
// 2 - We need a new variable to hold the value of the return
// 3 - When called, the function becomes the value of the return

let capitalizedName = (name) => {
    let capName = '';
    for (let letter in name) {
        if (letter == 0){
            capName += name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();
        }
    }
    return capName;
}

// console.log(capName); error, not defined

const myName = capitalizedName('weSLeY');
console.log(myName + ' how are you doing?');

/*
Challenge:
Make a tip calculator using a function
Have it return the value
Capture that returned value in a VARIABLE
Print that variable
*/

//My answer 1
let tipcalc = (bill) => {
    let tip = bill * .20
    return tip;
};

let bill = 120
let tipamount = tipcalc(120)
console.log(tipamount + ' is the tip for this bill')

//My Answer 2
let bill = x => {
    tip = x * .20;
    return tip;
}

bill (100);
let tipAmount = bill(100)
console.log(tipAmount + ' is your tip on this bill')


//Ellie Answer
let tipcalc = (price) => {
    let tipprc = 0.15;
    let tip = price * tipprc;
    return tip;
}

let tipdinner = tipcalc(100);
console.log(tipdinner);
