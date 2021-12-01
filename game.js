console.log('guessing game');


var guessNumber = 0 // number
var secretNumber = 1 // hard code to check

// 1. user can click on any button to disable it
// 2. clicking on reset should re-enable every button


// reset should reset buttons, numbers of guesses and the message 
// once you guess it right. you cannot countinue with the game

var guessButtons = document.querySelectorAll('section button')



function handleClick(event) {
    let theOnetheUserClickedOn = event.target
    theOnetheUserClickedOn.disabled = true
}


guessButtons.forEach(function (button) {
    button.addEventListener('click', handleClick)
})



var resetButton = document.querySelectorAll('.reset-btn')

function handleReset(event) {
    for (let i = 0; i < guessButtons.length; i++) {
        guessButtons[i].disabled = false
        resetButton.disabled = false
    }
}



var guessNumberSpan = document.querySelector('.guess-nuber-span')

// resetButton.addEventListener('click', handleReset)



// }
// guessButtons[1].disabled = false
// guessButtons[2].disabled = false
// guessButtons[3].disabled = false
// guessButtons[4].disabled = false
// guessButtons[5].disabled = false
// guessButtons[6].disabled = false

// }







// // 1. transmogrifier
// // Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result

// // The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// // 1. transmogrifier
// function transmogrifier(val1, val2, power) {
//     var result = Math.pow(val1 * val2, power);

//     // console.log(result);
//     return result;
// }

// transmogrifier(1, 4, 6);
// //4096


// // 2. sum
// // Write a function sum that accepts a single parameter as an argument, namely an array of numbers. The function should return the sum of all the numbers in the array



// // var sumArray = [1, 2, 3, 4]

// // function sum() {
// //     for (let i = 0; i < sumArray.length; i++) {
// //         sum += sumArray[i];
// //     }
// //     console.log(sum);
// // }

// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);


// // 3. lengths
// // Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// // lengths(['my', 'cake', 'pudding']) // => [2,4,7]
// // lengths(['now', 'I', 'know', 'my', 'ABC!']) // => [3,1,4,2,4]


// // var firstArray = ['my', 'cake', 'pudding']

// // function lengths(firstArray) {
// //     let resultArray = [];
// //     firstArray.forEach(function () {
// //     }




// // 4. sum of lengths
// // using the sum and lengths function you wrote in the last 2 questions write code to work out the sum of the lengths of the following fruits array. display the result in the console.

// // var fruits = ['kiwi', 'apple', 'mango']
// // your code should print 14




// // Random Fruits





// divVar = document.querySelector('div')
// divList1 = document.querySelectorAll('div')[0]
// divList2 = document.querySelectorAll('div')[1]
// divList3 = document.querySelectorAll('div')[2]

// function makeRed(event) {
//     console.log(event.target)

//     theOneTheUserClickedOn.style.background = 'red'
//     console.log(event.target)
//     if (divList1.style.backgroundColor == 'red' &&
//         divList2.style.backgroundColor == 'red' &&
//         divList3.style.backgroundColor == 'red') {
//         console.log('time to go green!')
//     }
// }


// divVar.addEventListener('click', makeRed)