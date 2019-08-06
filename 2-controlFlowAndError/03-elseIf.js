/* ************************
? ELSE IF CONDITIONAL
************************* */

let age = 20

if (age <= 17) {
    console.log("Sorry, you're too young to do anything");
} else if (age >= 18 && age <= 20) {
    console.log("Yay! You can vote!");
} else if (age >= 21 && age <= 24) {
    console.log("Yay! You can drink!");
} else if (age >=25) {
    console.log('Yay! You can rent a car!');
}

// or you can flip the requirements to strictest first decescending to least strict