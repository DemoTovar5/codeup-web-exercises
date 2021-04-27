(function(){
   "use strict";

   // ARRAYS
   //
   //  [values go in here]
   //
   // var myarr = ["dog","cat","fish"]
   //
   // var myCharacteristics = ["Demo","27","Student"];
   //
   //  console.log("Hello my name is " + myCharacteristics[0]);
   //
   //    myCharacteristics[0] += " Tovar" // strings are immutable
   //
   //  console.log(myCharacteristics[0]);

      // for (let i = 0; i < 10; i++){
      //
      //
      // }

      var myPets = ["River", "Bella","Spike"];

      // for (let i = 0; i < myPets.length; i++){
      //
      //     console.log(myPets[i])
      // }

    // myPets.forEach(function(pet){
    //     console.log(pet)
    // })

    // TODO: MINI-EXERCISE
//  -> Create an array with at least 5 elements, describing whatever you'd like!
//  -> Create a loop which will log each element to the console
//  -> Wrap that loop in a function which has an array parameter
//  -> Call the function and pass in your array as the argument
//  -> DID YOU KNOW: You can add different data types to an array??
//      -> Try adding strings, numbers, or booleans as elements

// var myFavoriteSports = ["Football","Golf","Basketball","Soccer","MMA"];
//
//        for (let i = 0; i < myFavoriteSports.length; i++)


    // ARRAY MANIPULATION

    // .length -
    // .ForEach() -
    // FOR LOOP -



 //    var days = ["Monday", "Tuesday", "Wednesday"];
 //    console.log(days.length)
 //  var newLength = days.push("Thursday");
 //    console.log(newLength)
 //
 // var removedElement = days.pop();
 //
 //    console.log(days)
 //    console.log("The removed element was: " + removedElement)

// TODO: MINI-EXERCISE
//  -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

    // var days = ["Monday", "Tuesday", "Wednesday"]
    //
    // var remainingDays = ["Thursday", "Friday", "Saturday"]
    //
    // remainingDays.forEach(function(day){
    //     days.push(day);
    // })
    //
    // console.log(days)


    // .unshift(valuetoAdd)

    //Start 0,1,2,3
    // Unshift   0,1,2,3
// w/New        0,1,2,3,4

    // var NumArray = [1,2,3,4,5];
    //
    // console.log(NumArray.indexOf(1));
    //
    // NumArray.unshift(6);
    //
    // console.log(NumArray.indexOf(1))
    //
    // console.log(NumArray);
    //
    // var sortedArray = NumArray.sort();
    //
    // console.log(sortedArray)

//     var daysInMonth = [...Array(32).keys()]
// console.log(daysInMonth)
// var removedDay = daysInMonth.shift();
//
//     console.log(daysInMonth);

    // TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array

// var days = ["Monday", "Tuesday", "Wednesday"]
//
//     var remainingDays = ["Thursday", "Friday", "Saturday"]
//
//     remainingDays.forEach(function(day){
//         days.push(day);
//     })
//
//     console.log(days)
//
// function WeekDay(week) {
//        let newArr = []
//        let arrLength = week.length;
//        for (let i = 1; i <= arrLength; i++) {
//
//           }
//     }

    function sortMyNums(num1, num2, num3) {
        var numArray = [num1, num2, num3];
        console.log(numArray);
        numArray.sort();
        console.log(numArray)
        return numArray;
    }

sortMyNums(13,2,50);

var planetsArray = planetsString.split("|");
    console.log(planetsArray)


})()