/* **************************
CALLING FUNCTIONS
***************************/

function hi() {
    console.log('HI!');
}

hi();

// This is how we fcall, or 'invoke' our function
// It's the START button on a machine. 

/*
Challenge:
Create a function that, when invoked, lists out the numbers 1-10
*/

function number() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
}

number();

/*
Challenge:
Given the array, create a function that lists out the values indivudally
*/

let arr = ['This', 'is', 'really', 'cool'];

function arrList () {
  //  for(let word in arr) {
    //    console.log(arr[word]);
  //  }

  for (word of arr) {
      console.log(word)
  }
}

arrList()