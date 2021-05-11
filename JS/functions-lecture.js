"use strict";

// var num = 5;
//
// num = num + 5;
//
// console.log(num);

// creating an interface for other code to use without knowing what happens inside add ().

// function add(num1, num2){
//     return num1 + num2;_
// }
//
// console.log("The result of add() is: " + add(123, 321));

// MINI EXERCISE
// TODO:Create functions which will return the product (*) of two numbers and the dividend (/)
// of two numbers, respectively

function multiply(num1, num2){
    return num1 * num2;
}

console.log("The result of multiply() is: " + multiply(25, 4));

function divide(num1, num2){
    return num1 / num2;
}

console.log("The result of divide() is: " + divide(100,4));

