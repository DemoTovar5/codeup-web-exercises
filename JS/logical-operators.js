"use strict";


// I want a routine which will determine if a dog is in fact my dog
// The dog must have fur, have whiskers, and have a name

// var hasFur = true;
// var hasWhiskers = true;
// var nameIsRiver = true;
//
// var isMyDog = (hasFur && hasWhiskers && nameIsRiver);
//
// if(isMyDog) {
//     console.log("Good Pupper!");
// }

// // Logical OR (||)

var creditScore = 720;
var cashOnHand = 5000;

if (creditScore > 680 || cashOnHand > 3000){
    console.log("I GOT A CAR!");
 }

var hasRequiredScoreorCash = (creditScore > 680) || (cashOnHand > 3000);

var lengthofEmployment = 6;

var hasAdequateLengthofEmployment = (lengthofEmployment >= 6);

if(hasRequiredScoreorCash && hasAdequateLengthofEmployment){

    console.log ("YOU GOT CAR!");

}

// LOGICAL NOT (!)

console.log("The inverted value is: " + !!true);





