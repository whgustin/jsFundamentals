let weather = 75;

if ( weather < 70 ) {
    console.log('Wear a jacket!');
} else {
    console.log ('No jacket needed!');
}

if ( weather < 75 && weather > 55 ) {
    console.log('Wear a jacket!');
} else {
    console.log('Number is not in range.')
}


let name = 'Wes';

if (name == 'Wes') {
    console.log('Hello, my name is Wes')
} else {
    console.log('Hello, what is your name?')
};

//a string works like an array

let name = 'aUTuMN';

//charAt(0) -- method
//[0] -- squarebracket notation

if(name.charAt(0)) === name.charAt(0).toUpperCase()) {
    firstLetter = name.charAt(0) + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}
    

