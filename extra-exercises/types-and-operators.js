(function(){
"use strict";

function isOdd(num) {
    return num % 2 !== 0;
}

function isEven(num) {
    return num % 2 === 0;
}

function identity(input) {
    return input === input;
}

function isTrue(input){
    return input === true;
}

function isFalse(input){
    return input === false;
}

function isTruthy(input) {
    return input == true;
}
//
// function isFalsy(input){
//     return input == false;
// }
//
// function subtract(num1,num2) {
//     return (num1 - num2);
// }
// console.log(subtract(10,5))
//
// function multiply(num1,num2){
//     return (num1 * num2);
// }
//
// console.log(multiply(5,5))
//
// function divide(num1, num2) {
//     return (num2 % num1);
// }
//
// console.log(divide(20,4))

    // Modify your math functions. If the both of the parameters are numbers OR numeric strings (4 or "4"),
    // then return the number value from the math operation. If not, just return false

//     function subtract(num1,num2) {
//     if (!isNaN(num1) && !isNaN(num2)) {
//         return (num1-num2)
//     } else{
//         return false
//     }
// }
// console.log(subtract("cat",5))

    // function multiplyIfNumeric(input1, input2) {
    //    if (!isNaN(input1) && !isNaN(input2)) {
    //        return (input1 * input2)
    //    } else{
    //        return false
    //    }
    // }
    //
    // console.log(multiplyIfNumeric(4,8))

    // TODO: write a function called toUppercase which takes in one input and
    //  returns that input in uppercase IF (and only if) the input is a non-numeric string
    //  otherwise, return false

//     function toUppercase(input) {
//      if (isNaN(input)) {
//          return input.toUpperCase()
//      } else {
//          return false
//      }
// }
// console.log(toUppercase("number"));

// TODO: write a function called stickyCaps which takes in an input and returns that input in sticky caps
//  ie: dog -> dOg, software developer -> sOfTwArE dEvElOpEr
//  -> You may be using a few different string methods
//  -> If the input is numeric or not a string, return false

function mockingCase(str) {

    str = str.toLowerCase();

    let stickyArr = str.split("");

    let wordsCased = [];

    for (let i = 0; i < stickyArr.length; i++) {
        if(i % 2 === 0) {
           wordsCased.push(stickyArr[i].toUpperCase());
        } else {
            wordsCased.push(stickyArr[i].toLowerCase());
        }

    }

    return wordsCased.join(" ");

}

console.log(mockingCase("hello world"))




})();