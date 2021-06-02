// let school = {
//     students: 36,
//     name:"high school one",
//     teachers:["Casey", "Tristan"],
//     getLunchMoney: function(){
//         console.log("you have X dollars left");
//     }
// }
// school.getLunchMoney();
//
// // dollar sign is tapping into the JQuery Library
// // $("selector")
//
//
// $("h1")

// $("#all-caps").hide();
// $("span").hide();
// $(".show-me").show();

$(".pink").css("background-color","pink");
$(".orange").css("background-color","orange");

$(window).load(function() {
    $(".pink").hide();
});

$(document).ready(function() {
    $(".orange").hide();
});

$('#blue').css("color","blue")

$("p , div").css("border","3px, solid, blue") // has to be one string to select multiple elements
// also has to be separated by a comma.

let firstPar = $("#blue"); // you can save selectors to variables //

firstPar.css("color", "pink")

