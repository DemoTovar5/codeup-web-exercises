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
