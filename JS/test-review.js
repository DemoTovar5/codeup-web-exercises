// Write a function called getSquare.
//     It should take in one input and return the square (not square root) of that input as a number.
//     If the input is not a number or numeric string, getSquare should return false.

// function getSquare(input) {
//     if (Number(input)) {
//         return input ** 2
//     }
//     else {
//         return false
//     }
// }

// console.log(getSquare(4))


// Write a function called getReverse.
//     It should take in one input and return the same string, in reverse.
//     If the input is not a string (a number, boolean, etc) or is a numeric string ("45"), then return false.

// function getReverse(input) {
//     if (typeof input === "string") {
//         return input.split("").reverse().join("")
//     } else {
//         return false
//     }
// }
//
// console.log(getReverse("45"))


// Write a function called multiplySquares().
//     It should take in two inputs, square each input, then return the product of mulitplying them together.
//     If the input is not a number (5) or numeric string ("5"), the method should return false.

// function multiplySquares(input1,input2) {
//     if (!isNaN(input1) && !isNaN(input2)) {
//         return (input1 ** 2) * (input2 ** 2);
//     } else {
//         return false
//     }
// }

// console.log(multiplySquares(4,2))

//
// Write a function called addTo.
//     It should take in one input and return the result of adding 3 to that input.
//     If the input is not a number or numeric string, addTo should return false.
//
//     function addTo(input) {
//     if (!isNaN(input)) {
//         return input + 3
//     } else {
//         return false
//       }
//     }
//
//     console.log(addTo(4))

// Write a function called subtractFrom.
//     It should take in one input and return the result of subtracting 3 from that input.
//     If the input is not a number or numeric string, subtractFrom should return false.

// function subtractFrom(input){
//     if (!isNaN(input)) {
//         return input - 3
//     } else {
//         return false
//     }
// }
//
// console.log(subtractFrom(5))

// Write a function called getLowestNumber.
//     It should take in three inputs and determine which input is the lowest number.
//     If ANY of the inputs are not numbers or numeric strings, getLowestNumber should return false.

// function getLowestNumber(input1, input2,input3){
//     if (!isNaN(input1) && !isNaN(input2) && !isNaN(input3)) {
//         return Math.min(input1,input2,input3)
//     } else {
//         return false
//     }
// }

// console.log(getLowestNumber(55,43 ,17));

// Write a function called isAString.
//     It should take in one input and return true if the input is a string.
//     If the input is not a string, then return false.
//
//     function isAString(input) {
//         if ( typeof input === "string") {
//             return true
//         } else {
//             return false
//         }
//    }
//
//    console.log(isAString(45))

// Write a function called last(input) that returns the last character of a string

// function last(input) {
// return input.charAt(input.length-1)
// }
//
// console.log(last("River"))