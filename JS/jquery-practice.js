// (function(){
//     let jqElements = $('.jqClass');
//     let backgroundBlue = 'lightblue';
//     let backgroundReset = '';
//     function addClickEvents(elementsToBind, color1, color2){
//         let handlerBlueBckGnd = function(){
//             elementsToBind.css('background-color', color1);
//             $(this).css('background-color', color2);
//         }
//         elementsToBind.click(handlerBlueBckGnd);
//     }
//     addClickEvents(jqElements, backgroundReset, backgroundBlue);
//     addClickEvents($(".card"), "", "red");
//     //make sure the DOM is loaded first
//     $(document).ready(function() {
//         alert ("Dom has finished loading!")
//     });
//     // parent method for adding all listeners
//
//         //get the elements to add listener and change image
//         // $('.col-md-3 ').hover(
//         //     function() {
//         //         $(this).find('background-image', 'jazz-music-rubber-duck.jpg');
//         //     },
//         //     function() {
//         //         $(this).find('background-image', 'question.png');
//         //     }
//         //     );
//
//         $(".col-md-3").hover(function (){
//             $(this).find(".img-fluid").attr("src", "images/jazz-music-rubber-duck.jpg")
//         },function (){
//             $(this).find(".img-fluid").attr("src", "images/question.png")
//         })
//
//         // addEvents(cardContainers, 'images/jazz-music-rubber-duck.jpg', 'mouseover');
//         // addEvents(cardContainers, 'images/question.png', 'mouseout');
//
//     // add mouseover/mouseout events to all selected elements
//     function addEvents(cardContainers, imgPath, listenerType){
//         cardContainers.forEach((cc) => {
//             let card = cc;
//             //create listener which will call function change the image
//             let listener = function (event) {
//                 let cardImg = card.querySelector(".card .card-img-top");
//                 changeImage(cardImg, imgPath);
//             };
//             cc.addEventListener(listenerType, listener);
//         });
//     }
//     //actual function to swap images
//     function changeImage(card, imgPath){
//         card.setAttribute('src', imgPath);
//     }
// })();

// $(document).ready(function(){
//     $("#submitBtn").click(function(){
//         $("#override-bootstrap").css("background-color", "red");
//     })
// });
//
// $(".card-text").click(function(){
//     $(this).css('background-color' , 'red');
// });
//
// $(document).ready(function() {
//     $("#resetBtn").click(function () {
//         location.reload();
//     })
// });
//
// $("#main-title").click(function(){
//     $(this).css('font-size' , '4em');
// });

// TODO: Add a data-attribute to each card container (.col-md-3)
//  -> Give that data-attribute a value of 1-4 (moving top to bottom in the html)
//  -> Now, when a user hovers over one of the .col-md-3 containers, you should replace the text inside #card-title with the data-attribute value
//  -> When the user hovers out, the data-attribute value should be replaced with the original text ("Card")


// $('.col-md-3 ').hover(
//             function() {
//                 $(this).find('card-title')
//                     .text($(this).attr("data-attribute"));
//             },
//             function() {
//                 $(this).find('card-title', 'question.png');
//             }
//             );

// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back

$(document).ready(function(){
    $('.list-group-item').click(function(){
        $(this).css("text-transform" , "uppercase");
    });
});

$(".list-group-item").css("background-color", "blue");

$(document).ready(function(){
    $('.list-group-item').click(function(event){
        event.preventDefault();
        $(this).toggleClass('background-color');
    });
});





